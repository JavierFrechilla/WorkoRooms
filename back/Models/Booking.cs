using System;
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
        public DateTime DateIn { get; set; }
        public DateTime DateOut { get; set; }
        public User User { get; set; }
        public Purpose Purpose { get; set; }
        public Room Room { get; set; }
        public string Participants { get; set; }
    }
}
