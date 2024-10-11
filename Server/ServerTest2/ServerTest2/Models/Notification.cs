using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ServerTest2.Models;

public class Notification {

    public string Type { get; set; } = null!;

    [BsonElement("time")]
    [BsonRepresentation(BsonType.DateTime)]
    public DateTime? Time { get; set; } = null;


}