using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ServerTest2.Models;

public class Plant
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")]public string Name { get; set; } = null!;

    [BsonElement("device")]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Device { get; set; } = null!;
}