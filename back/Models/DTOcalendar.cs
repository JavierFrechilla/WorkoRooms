using System;

namespace workorooms.Models
{
    public class DTOcalendar
    {
        public string UserName { get; set; }
        public string PurposeName { get; set; }
        public string RoomColor { get; set; }
        public DateTime DateIn { get; set; }
        public DateTime DateOut { get; set; }
    }
}
