using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ServerTest2.Models;

namespace ServerTest2.Services;

public class UserService
{
    private readonly IMongoCollection<User> _userCollection;

    public UserService(IOptions<TeamHappyDatabaseSettings> teamHappyDataBaseSettings)
    {
        MongoClient mongoClient = new MongoClient(teamHappyDataBaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(teamHappyDataBaseSettings.Value.DatabaseName);

        _userCollection = mongoDatabase.GetCollection<User>(teamHappyDataBaseSettings.Value.UserCollectionName);
    }
    
    public async Task<List<User>> GetAsync() =>
        await _userCollection.Find(_ => true).ToListAsync();
    public async Task<List<User>> GetFromNameAsync(string name) =>
        await _userCollection.Find(x => x.Username == name).ToListAsync();
    public async Task<User?> GetAsync(string id) =>
        await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(User newBook) =>
        await _userCollection.InsertOneAsync(newBook);

    public async Task UpdateAsync(string id, User updatedBook) =>
        await _userCollection.ReplaceOneAsync(x => x.Id == id, updatedBook);

    public async Task RemoveAsync(string id) =>
        await _userCollection.DeleteOneAsync(x => x.Id == id);
}