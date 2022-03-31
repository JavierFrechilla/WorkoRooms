using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using workorooms.Models;

namespace workorooms.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<workorooms.Models.Booking> Booking { get; set; }

        public DbSet<workorooms.Models.DTOBookingWithParticipants> DTOBookingWithParticipants { get; set; }

        public DbSet<workorooms.Models.Participant> Participant { get; set; }

        public DbSet<workorooms.Models.Purpose> Purpose { get; set; }

        public DbSet<workorooms.Models.Resource> Resource { get; set; }

        public DbSet<workorooms.Models.Room> Room { get; set; }

        public DbSet<workorooms.Models.User> User { get; set; }
    }
}
