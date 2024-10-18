using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrafficManagementAPI.Data;
using TrafficManagementAPI.Models;

namespace TrafficManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrafficDataController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TrafficDataController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/TrafficData
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrafficData>>> GetTrafficData()
        {
            return await _context.TrafficData.ToListAsync();
        }

        // POST: api/TrafficData
        [HttpPost]
        public async Task<ActionResult<TrafficData>> PostTrafficData(TrafficData trafficData)
        {
            _context.TrafficData.Add(trafficData);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetTrafficData", new { id = trafficData.Id }, trafficData);
        }

        // Additional actions (PUT, DELETE) can be implemented similarly...
    }
}
