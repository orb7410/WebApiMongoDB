
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace WebApiMongoDB.Models
{
    [BsonIgnoreExtraElements]
    public class Student
    {
        [BsonId] //decorators- for mapping 
        public string Id { get; set; } = string.Empty;

        [BsonElement("firstname")]
        public string FirstName { get; set; } = "Student First Name";

        [BsonElement("picture")]
        public string Picture { get; set; } = "Student picture";

        [BsonElement("nickname")]
        public string NickName { get; set; } = "Student NickName";

        [BsonElement("lastname")]
        public string LastName { get; set; } = "Student Last Name";

        [BsonElement("department")]
        public string Department { get; set; } = "Department";

        [BsonElement("class")]
        public string Class { get; set; } = "Class Name";

        [BsonElement("gender")]
        public byte Gender { get; set; } = 1;

        [BsonElement("age")]
        public int Age { get; set; }

        [BsonElement("graduated")]
        public bool IsGraduated { get; set; } = false;
    }
}
