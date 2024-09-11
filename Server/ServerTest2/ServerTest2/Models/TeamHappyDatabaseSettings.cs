namespace ServerTest2.Models;

public class TeamHappyDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;
    public string DatabaseName { get; set; } = null!;
    public string UserCollectionName { get; set; } = null!;
    public string DeviceCollectionName { get; set; } = null!;
    public string EnvironmentRecordCollectionName { get; set; } = null!;
    public string PlantTypeCollectionName { get; set; } = null!;
    public string UserPlantsCollectionName { get; set; } = null!;
}