using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using ServerTest2.Models;

namespace ServerTest2.Services;

public class UserPlantService
{
    private readonly IMongoCollection<UserPlant> _plantCollection;
    private readonly IMongoCollection<Device> _devicesCollection;
    public UserPlantService(IOptions<TeamHappyDatabaseSettings> teamHappyDataBaseSettings)
    {
        MongoClient mongoClient = new MongoClient(teamHappyDataBaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(teamHappyDataBaseSettings.Value.DatabaseName);

        _plantCollection = mongoDatabase.GetCollection<UserPlant>(teamHappyDataBaseSettings.Value.UserPlantsCollectionName);
        _devicesCollection= mongoDatabase.GetCollection<Device>(teamHappyDataBaseSettings.Value.DeviceCollectionName);
    }
    
    public async Task<List<UserPlant>> GetAsync() =>
        await _plantCollection.Find(_ => true).ToListAsync();
    public async Task<UserPlant?> GetAsync(string id) =>
        await _plantCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task<List<UserPlant>> GetFromUserAsync(string id)
    {
        var filter = Builders<Device>.Filter.Eq("_id", id);
        var filter2 = Builders<BsonDocument>.Filter.Eq("asDevices.user", new ObjectId(id));
        var projection = Builders<BsonDocument>.Projection.Exclude("asDevices");

    
    
        return await _plantCollection.Aggregate()
            .Lookup("Devices", "device", "_id", "asDevices")
            .Unwind("asDevices")
            .Match(filter2)
            .Project(projection)
            .As<UserPlant>()
            .ToListAsync();
    }
    public async Task CreateAsync(UserPlant newBook) =>
        await _plantCollection.InsertOneAsync(newBook);

    public async Task UpdateAsync(string id, UserPlant updatedBook) =>
        await _plantCollection.ReplaceOneAsync(x => x.Id == id, updatedBook);

    public async Task RemoveAsync(string id) =>
        await _plantCollection.DeleteOneAsync(x => x.Id == id);
}