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
    public class PurposesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PurposesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Purposes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Purpose>>> GetPurpose()
        {
            return await _context.Purpose.ToListAsync();
        }

        // GET: api/Purposes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Purpose>> GetPurpose(int id)
        {
            var purpose = await _context.Purpose.FindAsync(id);

            if (purpose == null)
            {
                return NotFound();
            }

            return purpose;
        }

        // PUT: api/Purposes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPurpose(int id, Purpose purpose)
        {
            if (id != purpose.Id)
            {
                return BadRequest();
            }

            _context.Entry(purpose).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PurposeExists(id))
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

        // POST: api/Purposes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Purpose>> PostPurpose(Purpose purpose)
        {
            _context.Purpose.Add(purpose);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPurpose", new { id = purpose.Id }, purpose);
        }

        // DELETE: api/Purposes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePurpose(int id)
        {
            var purpose = await _context.Purpose.FindAsync(id);
            if (purpose == null)
            {
                return NotFound();
            }

            _context.Purpose.Remove(purpose);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PurposeExists(int id)
        {
            return _context.Purpose.Any(e => e.Id == id);
        }
    }
}
