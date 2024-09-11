using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ServerTest2.Models;

public class UserPlant
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")]public string Name { get; set; } = null!;
    
    [BsonElement("plant_type")]
    [BsonRepresentation(BsonType.ObjectId)]
    public string PlantType { get; set; } = null!;
    
    [BsonElement("device")]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Device { get; set; } = null!;
}