using Microsoft.EntityFrameworkCore;
using TrafficManagementAPI.Models;

namespace TrafficManagementAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<TrafficData> TrafficData { get; set; }
    }
}
