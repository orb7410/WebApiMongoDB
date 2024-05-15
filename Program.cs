using Microsoft.Extensions.DependencyInjection;
using WebApiMongoDB.Data;
using WebApiMongoDB.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//configuring the DatabaseSettings class with values from the ConnectionStrings section of the appsettings.json file.
//This allows you to inject DatabaseSettings into your services and access database connection settings easily.
builder.Services.Configure<DatabaseSettings>(
        builder.Configuration.GetSection("ConnectionStrings"));

//making StudentServices available for dependency injection throughout your application.
//Singleton services are created once and shared throughout the application's lifetime.
builder.Services.AddSingleton<StudentServices>();

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
