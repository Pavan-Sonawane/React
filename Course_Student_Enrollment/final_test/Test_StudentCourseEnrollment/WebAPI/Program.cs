using Infrastructure.Context;
using Infrastructure.Repositories;
using Infrastructure.Services.Custom.CourseServices;
using Infrastructure.Services.Custom.EnrollementServices;
using Infrastructure.Services.Custom.StudentServices;
using Infrastructure.Services.Generic;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<MainDbContext>(option => option.UseSqlServer(builder.Configuration.GetConnectionString("Database")));

builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddTransient(typeof(IService<>), typeof(Service<>));
builder.Services.AddTransient(typeof(IStudentService), typeof(StudentService));
builder.Services.AddTransient(typeof(ICourseService), typeof(CourseService));
builder.Services.AddTransient(typeof(IEnrollementService), typeof(EnrollementService));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder
            .AllowAnyOrigin() // Allow requests from any origin
            .AllowAnyMethod()
            .AllowAnyHeader());
});


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

// Enable CORS
app.UseCors("AllowAllOrigins");

app.MapControllers();

app.Run();
