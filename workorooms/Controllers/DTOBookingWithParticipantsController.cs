using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using workorooms.Data;
using workorooms.Models;

namespace workorooms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DTOBookingWithParticipantsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DTOBookingWithParticipantsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/DTOBookingWithParticipants
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DTOBookingWithParticipants>>> GetDTOBookingWithParticipants()
        {
            return await _context.DTOBookingWithParticipants.ToListAsync();
        }

        // GET: api/DTOBookingWithParticipants/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DTOBookingWithParticipants>> GetDTOBookingWithParticipants(int id)
        {
            var dTOBookingWithParticipants = await _context.DTOBookingWithParticipants.FindAsync(id);

            if (dTOBookingWithParticipants == null)
            {
                return NotFound();
            }

            return dTOBookingWithParticipants;
        }

        // PUT: api/DTOBookingWithParticipants/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDTOBookingWithParticipants(int id, DTOBookingWithParticipants dTOBookingWithParticipants)
        {
            if (id != dTOBookingWithParticipants.Id)
            {
                return BadRequest();
            }

            _context.Entry(dTOBookingWithParticipants).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DTOBookingWithParticipantsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DTOBookingWithParticipants
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DTOBookingWithParticipants>> PostDTOBookingWithParticipants(DTOBookingWithParticipants dTOBookingWithParticipants)
        {
            _context.DTOBookingWithParticipants.Add(dTOBookingWithParticipants);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDTOBookingWithParticipants", new { id = dTOBookingWithParticipants.Id }, dTOBookingWithParticipants);
        }

        // DELETE: api/DTOBookingWithParticipants/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDTOBookingWithParticipants(int id)
        {
            var dTOBookingWithParticipants = await _context.DTOBookingWithParticipants.FindAsync(id);
            if (dTOBookingWithParticipants == null)
            {
                return NotFound();
            }

            _context.DTOBookingWithParticipants.Remove(dTOBookingWithParticipants);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DTOBookingWithParticipantsExists(int id)
        {
            return _context.DTOBookingWithParticipants.Any(e => e.Id == id);
        }
    }
}
