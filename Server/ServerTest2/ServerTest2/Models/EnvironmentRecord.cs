using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;

namespace ServerTest2.Models;

public class EnvironmentRecord
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("device")]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Device { get; set; } = null!;
    
    [BsonElement("time")]
    [BsonRepresentation(BsonType.DateTime)]
    public DateTime? Time { get; set; } = null!;

    [BsonElement("temp")] public float? Temperature { get; set; } = null!;

    [BsonElement("moisture")] public float? Moisture { get; set; } = null!;
    public float? Sunlight {get; set;} = null!;
}