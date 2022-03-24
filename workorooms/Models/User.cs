using System.Collections.Generic;

namespace workorooms.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Photo { get; set; }
        public string Gmail { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public List<Booking> Bookings { get; set; }
    }
}
