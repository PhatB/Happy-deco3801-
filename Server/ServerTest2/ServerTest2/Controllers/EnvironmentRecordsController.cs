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
    public class EnvironmentRecordsController : ControllerBase
    {
        private readonly EnvironmentRecordService _environmentRecordService;
        
        /// <summary>
        /// Constructor for a user controller
        /// </summary>
        /// <param name="environmentRecordService">The corresponding MongoDB service</param>
        public EnvironmentRecordsController(EnvironmentRecordService environmentRecordService) => _environmentRecordService = environmentRecordService;
        
        
        // GET: api/<UserController>
        /// <summary>
        /// API GET function.
        /// Gives the entire list of environmentRecords.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<List<EnvironmentRecord>> Get() => await _environmentRecordService.GetAsync();

        [HttpGet("FromDevice/{deviceId:length(24)}")]
        public async Task<List<EnvironmentRecord>> GetFromUsers(string deviceId) => await _environmentRecordService.GetFromDeviceAsync(deviceId);
        
    
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<EnvironmentRecord>> Get(string id)
        {
            var user = await _environmentRecordService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            return user;
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<IActionResult> Post(EnvironmentRecord newEnvironmentRecord)
        {
            await _environmentRecordService.CreateAsync(newEnvironmentRecord);

            return CreatedAtAction(nameof(Get), new { id = newEnvironmentRecord.Id }, newEnvironmentRecord);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, EnvironmentRecord updatedUser)
        {
            var book = await _environmentRecordService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            updatedUser.Id = book.Id;

            await _environmentRecordService.UpdateAsync(id, updatedUser);

            return NoContent(); 
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var book = await _environmentRecordService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            await _environmentRecordService.RemoveAsync(id);

            return NoContent();
        }
    }
}
