
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServerTest2.Models;
using ServerTest2.Services;

namespace ServerTest2.Controllers
{
    /// <summary>
    /// API Controller for the User collection
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class PlantTypeController : ControllerBase
    {
        private readonly PlantTypeService _plantTypeService;
        
        /// <summary>
        /// Constructor for a user controller
        /// </summary>
        /// <param name="plantTypeService">The corresponding MongoDB service</param>
        public PlantTypeController(PlantTypeService plantTypeService) => _plantTypeService = plantTypeService;
        
        
        // GET: api/<UserController>
        /// <summary>
        /// API GET function.
        /// Gives the entire list of users.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<List<PlantType>> Get() => await _plantTypeService.GetAsync();
        
        [HttpGet("name/{name}")]
        public async Task<List<PlantType>> GetFromName(string name) => await _plantTypeService.GetFromNameAsync(name);

        // GET api/<UserController>/5
        /// <summary>
        /// API GET function.
        /// Gives the user with the given ID.
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<PlantType>> Get(string id)
        {
            var user = await _plantTypeService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            return user;
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<IActionResult> Post(PlantType newUser)
        {
            await _plantTypeService.CreateAsync(newUser);

            return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, PlantType updatedUser)
        {
            var book = await _plantTypeService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            updatedUser.Id = book.Id;

            await _plantTypeService.UpdateAsync(id, updatedUser);

            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var book = await _plantTypeService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            await _plantTypeService.RemoveAsync(id);

            return NoContent();
        }
    }
}
