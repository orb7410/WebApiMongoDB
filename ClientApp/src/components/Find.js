import '../custom.css';
import React, { useState, useEffect } from 'react';

export default function Find () { 

    const [firstName, setFirstName] = useState('');
    const [student, setStudent] = useState({});

    const findStudent = () => {
        console.log("The Student Name To Find Is: ", firstName)
        fetch(`api/student/${firstName}`)
        .then(r => r.json())
        .then(d=>{
            console.log("Response from backend for finding student", d)
            console.log(d)
            setStudent(d)
        }).catch(e=>console.log("Error finding student: ", e))
    }

    useEffect(() => {
        console.log("I'LL PASS THE INTERVIEW!!")
        if (student !== null) {
            console.log(student.lastName)
        }
      }, [student]);

      useEffect(() => {
        console.log("I'LL PASS THE INTERVIEW!!")
        if (student !== null) {
            console.log(student.lastName)
        }
      }, [teacher]);

      useEffect(() => {
        console.log("PAGE LOADED")
      }, []);

      useEffect(() => {
        console.log("I'LL PASS THE INTERVIEW!!")
        if (student !== null) {
            console.log(student.lastName)
        }
      }, [student, teacher]);
    

    return  (
        <section className="find-student">
            <h2>{student.firstName}</h2>
            <h1>Find Student</h1>
            <div>
                <label htmlFor="fn">Find by First Name </label>

                <input 
                    type="text" name="firstName" id="fn" value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} //The onChange event handler is a function that takes an event (e) as an argument.
                />

                <div className='add-cencel-new-btn'>
                <button className="find-btn" onClick={findStudent}>Find Student</button>
            </div>
            </div>
        </section>

    )
}



