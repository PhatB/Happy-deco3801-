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

    [BsonElement("temp")] public int? Temperature { get; set; } = null!;

    [BsonElement("moisture")] public int? Moisture { get; set; } = null!;
    public int? Sunlight {get; set;} = null!;
}