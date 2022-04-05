using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using workorooms.Data;
using workorooms.Models;

namespace workorooms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DTOCalendarsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DTOCalendarsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<DTOcalendar>> GetBooking()
        {
            List<Booking> bookings = _context.Booking.ToList();
            List<DTOcalendar> calendars = new();

            foreach(Booking b in bookings)
            {
                DTOcalendar c = new();
                Room r = _context.Room.Find(b.RoomId);
                Purpose p = _context.Purpose.Find(b.PurposeId);
                User u = _context.User.Find(b.UserId);

                c.UserName = u.Name;
                c.PurposeName = p.Name;
                c.RoomColor = r.Color;
                c.DateIn = b.DateIn;
                c.DateOut = b.DateOut;

                calendars.Add(c);

            }

            return calendars;
        }

    }
}
