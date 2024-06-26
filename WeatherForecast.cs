namespace WebApiMongoDB
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        public string City { get; set; }

        public int Region { get; set; }

        public string Country { get; set; }
        public string? Summary { get; set; }
    }
}