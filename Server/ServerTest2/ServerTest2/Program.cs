using ServerTest2.Models;
using Microsoft.EntityFrameworkCore;
using ServerTest2.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.Configure<TeamHappyDatabaseSettings>(builder.Configuration.GetSection("TeamHappyDataBase"));
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<DeviceService>();
builder.Services.AddSingleton<EnvironmentRecordService>();
builder.Services.AddSingleton<PlantTypeService>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.MapGet("/", () => "Hello!");
app.UseHttpsRedirection();
app.UseAuthorization();
app.UseRouting();
app.UseExceptionHandler("/Error");
app.MapControllers();
app.Run();

