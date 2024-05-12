using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Metrics;

namespace WebApiMongoDB.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        
        };

        private static readonly string[] Cities = new[]
        {
        "Toronto", "Jerusalem"

        };

        private static readonly string[] Countries = new[]
        {
        "Israel", "Canada"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 7).Select(index => new WeatherForecast
            {
                
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                City = Cities[Random.Shared.Next(Cities.Length)],
                Country = Countries[Random.Shared.Next(Countries.Length)],
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}