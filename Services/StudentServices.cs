using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApiMongoDB.Data;
using WebApiMongoDB.Models;

namespace WebApiMongoDB.Services
{
    public class StudentServices
    {
        private readonly IMongoCollection<Student> _studentCollection;

        public StudentServices(IOptions<DatabaseSettings> settings)
        {
            var  mongoClient = new MongoClient(settings.Value.Connection);
            var mongoDb = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _studentCollection = mongoDb.GetCollection<Student>(settings.Value.CollectionName);
        }

        //retrieves all documents from the Student collection asynchronously.
        //the method doesn't block the calling thread while waiting for the operation to complete
        public async Task<List<Student>> GetAsync() => await _studentCollection.Find(_ => true).ToListAsync();

        public async Task<Student> GetAsync(string id) => await _studentCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task<Student> GetAsyncByName(string firstName) => await _studentCollection.Find(x => x.FirstName == firstName).FirstOrDefaultAsync();

        public async Task<Student> GetAsyncByNameAndLastName(string firstName, string LastName)
        {
            return await _studentCollection.Find(x => x.FirstName == firstName && x.LastName == LastName).FirstOrDefaultAsync();
        }  
        //add new student
        public async Task<Student> CreateAsync(Student newStudent)
        {
            await _studentCollection.InsertOneAsync(newStudent);
            return newStudent; // Return the newly inserted student
        }

        //update student
        public async Task UpdateAsync(Student newStudent) => 
            await _studentCollection.ReplaceOneAsync(x=> x.Id == newStudent.Id, newStudent);

        //delete student 
        public async Task RemoveAsync(string id) =>
            await _studentCollection.DeleteOneAsync(x=> x.Id == id);
    }
}
