using SimulacionTFI.Application.Extensions;
using SimulacionTFI.Domain.Entities;
using SimulacionTFI.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace SimulacionTFI.Aplication.Core
{
    public class SimulationEngine
    {
        private readonly IGenerator _generator;
        private EventCalendar _calendar;
        private List<Stage> _stages;
        private SimulationResults _results;

        public double CurrentTime { get; private set; }
        public double TotalDuration { get; private set; }

        public SimulationEngine(int totalCampaigns, List<int> workersPerStage, IGenerator generator)
        {
            _generator = generator;
            _calendar = new EventCalendar();
            _stages = new List<Stage>();

            TotalDuration = totalCampaigns * 7.0;
            CurrentTime = 0;

            _stages.Add(new Stage(1, "Inspección", workersPerStage[0]));
            _stages.Add(new Stage(2, "Desarme y Testeo", workersPerStage[1]));
            _stages.Add(new Stage(3, "Separación", workersPerStage[2]));
            _stages.Add(new Stage(4, "Clasificación", workersPerStage[3]));

            _results = new SimulationResults();
            _results.Stages.Add(new StageStats { StageName = "Inspección", ProcessedCount = 0, MaxQueueSize = 0 });
            _results.Stages.Add(new StageStats { StageName = "Desarme y Testeo", ProcessedCount = 0, MaxQueueSize = 0 });
            _results.Stages.Add(new StageStats { StageName = "Separación", ProcessedCount = 0, MaxQueueSize = 0 });
            _results.Stages.Add(new StageStats { StageName = "Clasificación", ProcessedCount = 0, MaxQueueSize = 0 });
        }

        public SimulationResults Run(double duration)
        {
            TotalDuration = duration;
            CurrentTime = 0;

            // 1. FORZAMOS la primera llegada en el tiempo 0
            _calendar.AddEvent(new Event(0, EventType.Llegada, 1));

            // 2. AGENDAMOS el primer Fin de Día (en el tiempo 1.0)
            _calendar.AddEvent(new Event(1.0, EventType.FinDeDia, 4));

            while (_calendar.HasEvents() && CurrentTime < TotalDuration)
            {
                Event currentEvent = _calendar.GetNextEvent();
                Console.WriteLine($"Procesando evento {currentEvent.Type} en tiempo {currentEvent.EventTime}");
                CurrentTime = currentEvent.EventTime;

                switch (currentEvent.Type)
                {
                    case EventType.Llegada: ProcessArrival(currentEvent); break;
                    case EventType.FinDeServicio: ProcessDeparture(currentEvent); break;
                    case EventType.FinDeDia: ProcessFinDeDia(currentEvent); break;
                }
            }

            foreach (var stage in _stages)
            {
                var stats = _results.Stages.FirstOrDefault(s => s.StageName == stage.Name);
                if (stats != null)
                {
                    stats.MaxQueueSize = stage.MaxQueueSize;
                    stats.TotalBusyTime = stage.TotalBusyTime;
                }
            }

            return _results;
        }

        private Device CreateRandomDevice()
        {
            double prob = _generator.SiguienteUniforme();
            var type = (prob < 0.65) ? DeviceType.Laptop : DeviceType.Desktop;

            double weight = (type == DeviceType.Laptop)
                ? 1.5 + (_generator.SiguienteUniforme() * 1.5)
                : 6.0 + (_generator.SiguienteUniforme() * 4.0);

            return new Device(weight, type);
        }

        private void ProcessDeparture(Event e)
        {
            var currentStage = _stages.Find(s => s.Id == e.StageId);
            if (currentStage == null) return;

            var stageStats = _results.Stages.FirstOrDefault(s => s.StageName == currentStage.Name);
            if (stageStats == null) return;

            Device finishedDevice = null;
            Material finishedMaterial = null;

            if (e.StageId == 3)
            {
                finishedMaterial = currentStage.EndServiceMaterial(CurrentTime);
            }
            else
            {
                finishedDevice = currentStage.EndService(CurrentTime);
            }

            stageStats.ProcessedCount++;
            if (e.StageId == 1)
            {
                _results.TotalDevicesProcessed++;
            }

            if (e.StageId == 1 && finishedDevice != null)
            {
                if (_generator.SiguienteUniforme() < 0.15)
                    _results.RefurbishedCount++;
                else
                    TransferEntity(e.StageId, 2, finishedDevice);
            }
            else if (e.StageId == 2 && finishedDevice != null)
            {
                _results.RecycledCount++;
                _results.CantidadPlacasRecuperadas++;

                var materiales = finishedDevice.Desarmar();
                var stage3 = _stages.Find(s => s.Id == 3);

                foreach (var mat in materiales)
                {
                    stage3.AddMaterialToQueue(mat);
                }

                while (stage3.IsAvailable() && stage3.HasMaterialQueue())
                {
                    var nextMat = stage3.TakeMaterialFromQueue();
                    if (nextMat != null)
                    {
                        stage3.StartServiceMaterial(nextMat, CurrentTime);
                        double capacidadPorHora = 15.0 + (_generator.SiguienteUniforme() * 15.0);
                        double horas = nextMat.weightMat / capacidadPorHora;
                        _calendar.AddEvent(new Event(CurrentTime + (horas / 8.0), EventType.FinDeServicio, 3));
                    }
                }
            }
            else if (e.StageId == 3 && finishedMaterial != null)
            {
                if (finishedMaterial.typeMat == MaterialType.Plastic)
                {
                    var stage4Stats = _results.Stages.FirstOrDefault(s => s.StageName == "Clasificación");
                    if (stage4Stats != null) stage4Stats.KgEnCola += finishedMaterial.weightMat;
                }
                else if (finishedMaterial.typeMat == MaterialType.Aluminum)
                    _results.AluminioRecuperadoKg += finishedMaterial.weightMat;
                else if (finishedMaterial.typeMat == MaterialType.Copper)
                    _results.CobreRecuperadoKg += finishedMaterial.weightMat;
                else if (finishedMaterial.typeMat == MaterialType.Iron)
                    _results.HierroRecuperadoKg += finishedMaterial.weightMat;
            }

            while (currentStage.IsAvailable())
            {
                if (e.StageId < 3 && currentStage.HasQueue())
                {
                    var nextDevice = currentStage.TakeFromQueue();
                    if (nextDevice != null)
                    {
                        currentStage.StartService(nextDevice, CurrentTime);
                        double serviceTime = 0.1 + (_generator.SiguienteUniforme() * 0.2);
                        _calendar.AddEvent(new Event(CurrentTime + serviceTime, EventType.FinDeServicio, currentStage.Id));
                    }
                }
                else if (e.StageId == 3 && currentStage.HasMaterialQueue())
                {
                    var nextMat = currentStage.TakeMaterialFromQueue();
                    if (nextMat != null)
                    {
                        currentStage.StartServiceMaterial(nextMat, CurrentTime);
                        double capacidadPorHora = 15.0 + (_generator.SiguienteUniforme() * 15.0);
                        double horas = nextMat.weightMat / capacidadPorHora;
                        _calendar.AddEvent(new Event(CurrentTime + (horas / 8.0), EventType.FinDeServicio, 3));
                    }
                }
                else
                {
                    break;
                }
            }
        }

        private void ProcessPlasticClassification(Stage stage4)
        {
            int trabajadores = stage4.WorkersCount;
            if (trabajadores == 0) return;

            // 1. Capacidad por hora por trabajador (entre 15 y 30 kg/h, igual que Separación)
            double capacidadPorHora = 15.0 + (_generator.SiguienteUniforme() * 15.0);

            // Capacidad máxima de todo el equipo en 1 día (8 horas)
            double capacidadDiaria = trabajadores * capacidadPorHora * 8.0;

            var stage4Stats = _results.Stages.Find(s => s.StageName == "Clasificación");

            // 2. Procesamos lo que hay en cola, o el tope de su capacidad diaria
            double aProcesar = Math.Min(stage4Stats.KgEnCola, capacidadDiaria);

            if (aProcesar > 0)
            {
                // 3. CÁLCULO DE TIEMPO OCUPADO
                // Tiempo en horas que tardó todo el equipo trabajando en paralelo
                double horasOcupadas = aProcesar / (capacidadPorHora * trabajadores);

                // Lo pasamos a la unidad de simulación (1 día = 8 horas)
                double diasOcupados = horasOcupadas / 8.0;

                // Sumamos el esfuerzo total (Días-Hombre) al acumulador de la etapa
                stage4.AddBusyTime(diasOcupados * trabajadores);

                // 4. Clasificación por calidades
                double alta = aProcesar * 0.20;
                double media = aProcesar * 0.50;
                double baja = aProcesar * 0.30;

                // Actualizamos los resultados
                stage4Stats.ProcessedCount += (int)aProcesar;
                stage4Stats.KgEnCola -= aProcesar;

                _results.PlasticoAltaCalidad += alta;
                _results.PlasticoMediaCalidad += media;
                _results.PlasticoBajaCalidad += baja;
            }
        }


        private void ProcessFinDeDia(Event e)
        {
            // Buscamos la etapa 4 completa y se la pasamos al método
            var stage4 = _stages.Find(s => s.Id == 4);
            ProcessPlasticClassification(stage4);

            // --- REGISTRO DEL REPORTE DIARIO ---
            var daily = new DailyStats
            {
                Day = (int)Math.Ceiling(CurrentTime),
                ProcessedCount = _results.TotalDevicesProcessed,
                // Calculamos la ocupación promediando las 4 etapas
                OcupacionPromedio = _stages.Average(s => s.WorkersCount > 0
                    ? (s.TotalBusyTime / (CurrentTime * s.WorkersCount))
                    : 0)
            };
            _results.DailyReport.Add(daily);

            if (CurrentTime + 1.0 <= TotalDuration)
            {
                _calendar.AddEvent(new Event(CurrentTime + 1.0, EventType.FinDeDia, 4));
            }
        }

        private void ProcessArrival(Event e)
        {
            int cantidadLlegada = (int)Math.Round(_generator.NextNormal(90, 10));
            _results.TotalDevicesArrived += cantidadLlegada;

            var stage = _stages.Find(s => s.Id == e.StageId);

            for (int i = 0; i < cantidadLlegada; i++)
            {
                var device = CreateRandomDevice();

                if (device.typeDev == DeviceType.Laptop)
                    _results.LaptopsArrived++;
                else
                    _results.DesktopsArrived++;

                if (stage.IsAvailable())
                {
                    stage.StartService(device, CurrentTime);
                    double serviceTime = (device.typeDev == DeviceType.Laptop) ? 0.33 : 0.5;
                    _calendar.AddEvent(new Event(CurrentTime + (serviceTime / 8.0), EventType.FinDeServicio, stage.Id));
                }
                else
                {
                    stage.AddToQueue(device);
                }
            }
        }

        private void ScheduleNextArrival()
        {
            double timeToNextArrival = 7.0;
            _calendar.AddEvent(new Event(CurrentTime + timeToNextArrival, EventType.Llegada, 1));
        }

        private void TransferEntity(int currentStageId, int nextStageId, Device device)
        {
            var nextStage = _stages.Find(s => s.Id == nextStageId);
            if (nextStage == null) return;

            nextStage.AddToQueue(device);

            if (nextStage.IsAvailable())
            {
                var devToProcess = nextStage.TakeFromQueue();
                nextStage.StartService(devToProcess, CurrentTime);

                double serviceTime = 0.1 + (_generator.SiguienteUniforme() * 0.2);
                _calendar.AddEvent(new Event(CurrentTime + serviceTime, EventType.FinDeServicio, nextStage.Id));
            }
        }

        public void SetBacklog(int cantidadSobrante)
        {
            _results.BacklogInicial = cantidadSobrante;

            var stage1 = _stages.Find(s => s.Id == 1);

            for (int i = 0; i < cantidadSobrante; i++)
            {
                // Creamos los equipos sobrantes y los metemos a la cola.
                // Usamos CreateRandomDevice pero NO sumamos a LaptopsArrived/DesktopsArrived
                // porque ya fueron contabilizados en la campaña anterior.
                var device = CreateRandomDevice();
                stage1.AddToQueue(device);
            }
        }


    }
}