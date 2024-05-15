using Microsoft.AspNetCore.Mvc;
using System.Data;
using WebApiMongoDB.Models;
using WebApiMongoDB.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiMongoDB.Controllers
{
    [Route("api/student")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly StudentServices _studentServices;

        public StudentController(StudentServices studentServices)
        {
            _studentServices = studentServices;
        }


        // GET: api/student
        [HttpGet]
        public async Task<List<Student>> Get() => await _studentServices.GetAsync();


        // GET api/<StudentController>/5
        [HttpGet("{id:Length(24)}")]
        public async Task<ActionResult<Student>> Get(string id)
        {
            Student student = await _studentServices.GetAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            return student;
        }

        // POST api/student
        [HttpPost]
        public async Task<ActionResult<Student>> Post(Student newStudent)
        {
            await _studentServices.CreateAsync(newStudent);
            // returns an HTTP 201 (Created) status code along with a location header pointing to the newly created resource.
            return CreatedAtAction(nameof(Get), new {id =  newStudent.Id}, newStudent);
        }

        // PUT api/student/id
        [HttpPut("{id:Length(24)}")]
        public async Task<ActionResult<Student>> Put(string id, Student updateStudent)
        {
            Student studen = await _studentServices.GetAsync(id);
            if (studen == null)
            {
                return NotFound("There is nostudent with this id:" + id);
            }
            updateStudent.Id = studen.Id;
            await _studentServices.UpdateAsync(updateStudent);
            return Ok("updated succeed");
        }

        // DELETE api/student/id
        [HttpDelete("{id:Length(24)}")]
        public async Task<ActionResult<Student>> Delete(string id)
        {
            Student studen = await _studentServices.GetAsync(id);
            if (studen == null)
            {
                return NotFound("There is nostudent with this id:" + id);
            }
            await _studentServices.RemoveAsync(id);
            return Ok("remove succeed");
        }

    }
}
