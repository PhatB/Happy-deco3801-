using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ServerTest2.Models;

namespace ServerTest2.Services;

public class DeviceService
{
    private readonly IMongoCollection<Device> _deviceCollection;

    public DeviceService(IOptions<TeamHappyDatabaseSettings> teamHappyDataBaseSettings)
    {
        MongoClient mongoClient = new MongoClient(teamHappyDataBaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(teamHappyDataBaseSettings.Value.DatabaseName);

        _deviceCollection = mongoDatabase.GetCollection<Device>(teamHappyDataBaseSettings.Value.DeviceCollectionName);
    }
    
    public async Task<List<Device>> GetAsync() =>
        await _deviceCollection.Find(_ => true).ToListAsync();
    
    public async Task<List<Device>> GetFromUserAsync(string userId) =>
        await _deviceCollection.Find(x => x.User == userId).ToListAsync();
    
    public async Task<Device?> GetAsync(string id) =>
        await _deviceCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Device newDevice) =>
        await _deviceCollection.InsertOneAsync(newDevice);

    public async Task UpdateAsync(string id, Device updatedDevices) =>
        await _deviceCollection.ReplaceOneAsync(x => x.Id == id, updatedDevices);

    public async Task RemoveAsync(string id) =>
        await _deviceCollection.DeleteOneAsync(x => x.Id == id);
}