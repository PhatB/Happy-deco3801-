using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ServerTest2.Models;

public class Notification {

    public string Type = null!;

    [BsonElement("time")] [BsonRepresentation(BsonType.DateTime)]
    public DateTime? Time = null;
    

}