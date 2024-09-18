using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ServerTest2.Models;

public class PlantType
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")]public string Name { get; set; } = null!;
    [BsonElement("sci_name")]public string ScientificName { get; set; } = null!;
    [BsonElement("difficulty")] public string CareDifficulty { get; set; } = "Easy";
    [BsonElement("moisture_min")]public int MoistureMin { get; set; } = 0;
    [BsonElement("moisture_max")]public int MoistureMax { get; set; } = 0;
    [BsonElement("sun_min")]public int SunlightMin { get; set; } = 0;
    [BsonElement("sun_max")]public int SunlightMax { get; set; } = 0;
    [BsonElement("temp_min")]public int TemperatureMin { get; set; } = 0;
    [BsonElement("temp_max")]public int TemperatureMax { get; set; } = 0;
    [BsonElement("uv_min")]public int UVMin { get; set; } = 0;
    [BsonElement("uv_max")]public int UVMax { get; set; } = 0;
    public string? Location { get; set; } = null;
    public string? Pests { get; set; } = null;
    public string? Detail { get; set; } = null;
    


}

public enum CareDifficulty
{
    [BsonRepresentation(BsonType.String)]
    Easy,
    [BsonRepresentation(BsonType.String)]
    Medium,
    [BsonRepresentation(BsonType.String)]
    Hard
}