using System.Collections.Generic;

namespace workorooms.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public int Capacity { get; set; }
        public bool State { get; set; }
        public string Color { get; set; }
        //public List<Booking> Bookings { get; set; }
    }
}
