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
    public class DevicesController : ControllerBase
    {
        private readonly DeviceService _deviceService;
        
        /// <summary>
        /// Constructor for a user controller
        /// </summary>
        /// <param name="deviceService">The corresponding MongoDB service</param>
        public DevicesController(DeviceService deviceService) => _deviceService = deviceService;
        
        
        // GET: api/<UserController>
        /// <summary>
        /// API GET function.
        /// Gives the entire list of devices.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<List<Device>> Get() => await _deviceService.GetAsync();

        [HttpGet("FromUser/{userid:length(24)}")]
        public async Task<List<Device>> GetFromUsers(string userid) => await _deviceService.GetFromUserAsync(userid);
        
    
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Device>> Get(string id)
        {
            var user = await _deviceService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            return user;
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<IActionResult> Post(Device newDevice)
        {
            await _deviceService.CreateAsync(newDevice);

            return CreatedAtAction(nameof(Get), new { id = newDevice.Id }, newDevice);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Device updatedUser)
        {
            var book = await _deviceService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            updatedUser.Id = book.Id;

            await _deviceService.UpdateAsync(id, updatedUser);

            return NoContent(); 
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var book = await _deviceService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            await _deviceService.RemoveAsync(id);

            return NoContent();
        }
    }
}
