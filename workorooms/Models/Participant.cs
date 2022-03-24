using System;

namespace workorooms.Models
{
    public class Participant
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public Guid BookingId { get; set; }
    }
}
