using System;
using System.Text.Json.Serialization;

namespace SimulacionTFI.Aplication.Core
{
    public class StageStats
    {
        public string StageName { get; set; }
        public int ProcessedCount { get; set; }
        public int MaxQueueSize { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public double KgEnCola { get; set; }

        // --- ESTO ES LO QUE FALTABA PARA EL ERROR DE LA LÍNEA 57 ---
        public double TotalBusyTime { get; set; }

        public double CalcularUtilizacion(int workersCount, double totalDurationDays)
        {
            // ¡QUITAMOS EL * 8.0 PORQUE TODO SE MIDE EN DÍAS!
            double tiempoTotalDisponible = totalDurationDays * workersCount;
            if (tiempoTotalDisponible <= 0) return 0;

            return (TotalBusyTime / tiempoTotalDisponible) * 100; // Esto te dará de 0 a 100%
        }
    }
}

    
