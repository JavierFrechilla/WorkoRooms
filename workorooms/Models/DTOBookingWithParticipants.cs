using System.Collections.Generic;

namespace workorooms.Models
{
    public class DTOBookingWithParticipants
    {
        public int Id { get; set; }
        public Booking Booking { get; set; }
        public List<Participant> Participants { get; set; }
    }
}
