
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Notification {

    public string Type = null!;

    [BsonElement("time")] [BsonRepresentation(BsonType.DateTime)]
    public DateTime? Time = null;
    

}