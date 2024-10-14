
using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
    public class UserPlantController : ControllerBase
    {
        private readonly UserPlantService _userPlantService;
        
        /// <summary>
        /// Constructor for a user controller
        /// </summary>
        /// <param name="userPlantService">The corresponding MongoDB service</param>
        public UserPlantController(UserPlantService userPlantService) => _userPlantService = userPlantService;
        
        
        // GET: api/<UserController>
        /// <summary>
        /// API GET function.
        /// Gives the entire list of users.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<List<UserPlant>> Get() => await _userPlantService.GetAsync();
        
        // GET api/<UserController>/5
        /// <summary>
        /// API GET function.
        /// Gives the user with the given ID.
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<UserPlant>> Get(string id)
        {
            var user = await _userPlantService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            return user;
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<IActionResult> Post(UserPlant newUser)
        {
            await _userPlantService.CreateAsync(newUser);

            return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, UserPlant updatedUser)
        {
            var book = await _userPlantService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            updatedUser.Id = book.Id;

            await _userPlantService.UpdateAsync(id, updatedUser);

            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var book = await _userPlantService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            await _userPlantService.RemoveAsync(id);

            return NoContent();
        }
        [HttpGet("FromUser/{userid:length(24)}")]
        public async Task<List<UserPlant>> GetFromUsers(string userid) => await _userPlantService.GetFromUserAsync(userid);

    }
}
