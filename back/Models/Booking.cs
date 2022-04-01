using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace workorooms.Models
{
    public class Booking
    {
        [Key]
        public Guid Id { get; set; }
        public int UserId { get; set; }
        public int PurposeId { get; set; }
        public int RoomId { get; set; }
        public DateTime Date { get; set; }
        public int Hour { get; }
        public DateTime HourOut { get; set; }
        public User User { get; set; }
        public Purpose Purpose { get; set; }
        public Room Room { get; set; }
        List<Participant> Participants { get; set; }
    }
}
