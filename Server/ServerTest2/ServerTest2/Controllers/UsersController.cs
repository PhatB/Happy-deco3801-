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
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;
        
        /// <summary>
        /// Constructor for a user controller
        /// </summary>
        /// <param name="userService">The corresponding MongoDB service</param>
        public UsersController(UserService userService) => _userService = userService;
        
        
        // GET: api/<UserController>
        /// <summary>
        /// API GET function.
        /// Gives the entire list of users.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<List<User>> Get() => await _userService.GetAsync();
        
        [HttpGet("/name/{name}")]
        public async Task<List<User>> GetFromName(string name) => await _userService.GetFromNameAsync(name);

        // GET api/<UserController>/5
        /// <summary>
        /// API GET function.
        /// Gives the user with the given ID.
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<User>> Get(string id)
        {
            var user = await _userService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            return user;
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<IActionResult> Post(User newUser)
        {
            await _userService.CreateAsync(newUser);

            return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, User updatedUser)
        {
            var book = await _userService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            updatedUser.Id = book.Id;

            await _userService.UpdateAsync(id, updatedUser);

            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var book = await _userService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            await _userService.RemoveAsync(id);

            return NoContent();
        }
    }
}
