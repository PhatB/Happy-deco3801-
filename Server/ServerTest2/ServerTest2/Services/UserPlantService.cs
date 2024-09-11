using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ServerTest2.Models;

namespace ServerTest2.Services;

public class UserPlantService
{
    private readonly IMongoCollection<UserPlant> _plantCollection;

    public UserPlantService(IOptions<TeamHappyDatabaseSettings> teamHappyDataBaseSettings)
    {
        MongoClient mongoClient = new MongoClient(teamHappyDataBaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(teamHappyDataBaseSettings.Value.DatabaseName);

        _plantCollection = mongoDatabase.GetCollection<UserPlant>(teamHappyDataBaseSettings.Value.UserPlantsCollectionName);
    }
    
    public async Task<List<UserPlant>> GetAsync() =>
        await _plantCollection.Find(_ => true).ToListAsync();
    public async Task<UserPlant?> GetAsync(string id) =>
        await _plantCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(UserPlant newBook) =>
        await _plantCollection.InsertOneAsync(newBook);

    public async Task UpdateAsync(string id, UserPlant updatedBook) =>
        await _plantCollection.ReplaceOneAsync(x => x.Id == id, updatedBook);

    public async Task RemoveAsync(string id) =>
        await _plantCollection.DeleteOneAsync(x => x.Id == id);
}