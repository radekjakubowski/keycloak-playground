using Microsoft.EntityFrameworkCore;
using ProfileService.Domain.Entities;

namespace ProfileService.Infrastructure.Persistence
{
    public class ProfileServiceDbContext : DbContext
    {
        public ProfileServiceDbContext(DbContextOptions<ProfileServiceDbContext> options) : base(options)
        {
        }

        public DbSet<Profile> Profiles { get; set; }
    }
}
