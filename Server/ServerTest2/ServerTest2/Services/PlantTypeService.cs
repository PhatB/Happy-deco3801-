using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ServerTest2.Models;

namespace ServerTest2.Services;

public class PlantTypeService
{
    private readonly IMongoCollection<PlantType> _plantTypeCollection;

    public PlantTypeService(IOptions<TeamHappyDatabaseSettings> teamHappyDataBaseSettings)
    {
        MongoClient mongoClient = new MongoClient(teamHappyDataBaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(teamHappyDataBaseSettings.Value.DatabaseName);

        _plantTypeCollection = mongoDatabase.GetCollection<PlantType>(teamHappyDataBaseSettings.Value.PlantTypeCollectionName);
    }
    
    public async Task<List<PlantType>> GetAsync() =>
        await _plantTypeCollection.Find(_ => true).ToListAsync();
    public async Task<List<PlantType>> GetFromNameAsync(string name) =>
        await _plantTypeCollection.Find(x => x.Name == name).ToListAsync();
    public async Task<PlantType?> GetAsync(string id) =>
        await _plantTypeCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(PlantType newType) =>
        await _plantTypeCollection.InsertOneAsync(newType);

    public async Task UpdateAsync(string id, PlantType updatedType) =>
        await _plantTypeCollection.ReplaceOneAsync(x => x.Id == id, updatedType);

    public async Task RemoveAsync(string id) =>
        await _plantTypeCollection.DeleteOneAsync(x => x.Id == id);
}