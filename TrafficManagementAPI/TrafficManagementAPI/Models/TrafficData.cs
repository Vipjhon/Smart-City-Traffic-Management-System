namespace TrafficManagementAPI.Models
{
    public class TrafficData
    {
        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        public int VehicleCount { get; set; }
        public string Location { get; set; }
        public string IncidentType { get; set; }
    }
}
