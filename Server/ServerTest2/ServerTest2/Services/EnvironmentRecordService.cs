using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ServerTest2.Models;

namespace ServerTest2.Services;

public class EnvironmentRecordService
{
    private readonly IMongoCollection<EnvironmentRecord> _environmentRecordCollection;

    public EnvironmentRecordService(IOptions<TeamHappyDatabaseSettings> teamHappyDataBaseSettings)
    {
        MongoClient mongoClient = new MongoClient(teamHappyDataBaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(teamHappyDataBaseSettings.Value.DatabaseName);

        _environmentRecordCollection = mongoDatabase.GetCollection<EnvironmentRecord>(teamHappyDataBaseSettings.Value.EnvironmentRecordCollectionName);
    }
    
    public async Task<List<EnvironmentRecord>> GetAsync() =>
        await _environmentRecordCollection.Find(_ => true).ToListAsync();
    
    public async Task<List<EnvironmentRecord>> GetFromDeviceAsync(string deviceId) =>
        await _environmentRecordCollection.Find(x => x.Device == deviceId).ToListAsync();
    
    public async Task<EnvironmentRecord?> GetAsync(string id) =>
        await _environmentRecordCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(EnvironmentRecord newEnvironmentRecord) =>
        await _environmentRecordCollection.InsertOneAsync(newEnvironmentRecord);

    public async Task UpdateAsync(string id, EnvironmentRecord updatedEnvironmentRecords) =>
        await _environmentRecordCollection.ReplaceOneAsync(x => x.Id == id, updatedEnvironmentRecords);

    public async Task RemoveAsync(string id) =>
        await _environmentRecordCollection.DeleteOneAsync(x => x.Id == id);
}