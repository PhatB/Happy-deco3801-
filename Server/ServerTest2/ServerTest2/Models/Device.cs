using MongoDB.Bson.Serialization.Attributes;

namespace ServerTest2.Models;

using MongoDB.Bson;
using MongoDB.Bson.Serialization;

public class Device
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")] public string Name { get; set; } = null!;

    [BsonElement("user")]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? User { get; set; } = null!;
}