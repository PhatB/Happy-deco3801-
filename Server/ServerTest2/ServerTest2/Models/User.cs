using MongoDB.Bson.Serialization.Attributes;

namespace ServerTest2.Models;

using MongoDB.Bson;
using MongoDB.Bson.Serialization;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")] public string Username { get; set; } = null!;
    [BsonElement("pword")] public string Password { get; set; } = null!;
}