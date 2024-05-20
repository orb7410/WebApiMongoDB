import React, { useState, useEffect } from 'react';
import '../custom.css';

export default function Home()
{
  const [students, setStudents] = useState([]);

  //uses when things are changing
  useEffect(() => {
    fetch("api/student")
      .then(r => r.json())
      .then(d => {
        console.log("the students are: ", d);
        setStudents(d);
      })
      .catch(e => console.log("the error fetching all students: ", e));
  }, []);

  useEffect(() => {console.log("hello")}, [students]);

    return (
      <main>
        <div className="header-container">
          <h1 className="header">Student Manager application</h1>
          <div className='add-btn'>
            <a href="/new">+</a>
          </div>
        </div>

        <div className="table-container">
        <table>
          <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Class Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>NickName</th>
            <th>Picture</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {students.length === 0 ? (
                  <tr className="row waiting">
                    <td colSpan="8">Loading...</td>
                  </tr>
                ) : (
                students.map(student=> <tr key={student.id}>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.department}</td>
                    <td>{student.class}</td>
                    <td>{student.gender=== 0 ? "Female" : "Male"}</td>
                    <td>{student.isGraduated? "Yes" : "No"}</td>
                    <td>{student.age}</td>
                    <td>{student.nickName}</td>
                    <td><img src={student.picture} className="student-picture-img" alt="student-picture-img"/></td>
                    <td><a href={"/edit?id="+student.id}>Edit</a></td>
                    <td>Delete</td>
                    </tr>))
              }
        </tbody>
        </table>
        </div>
      </main>
     
    );
  }
