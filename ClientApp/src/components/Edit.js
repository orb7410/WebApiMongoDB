import '../custom.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

const entry = {
    id: "",
    firstName: "",
    lastName: "",
    department: "",
    className: "",
    gender: "",
    age: "", 
    graduated: ""
}
export default function Edit (props) { 

    const[data, setData] = useState({});
    const[graduated, setGender] = useState(0);
    const[gender, setGraduated] = useState(false);
    const[age, setAge] = useState(18);
    const[id, setId] = useState();


    const editStudent = () => {
        console.log("The Edited Student Is: ", entry)
        fetch("api/student/"+id, {
            method: "PUT",
            body:JSON.stringify(entry),
            headers:{
                "content-type": "application/json"
            }
        }).then(r=>{
            console.log("Response from backend for editting new student", r)
            window.location = "/"
        }).catch(e=>console.log("Error Editing new student: ", e))
    }


    const editedData = (e) => {
        const name = e.target.name;
        let val = e.target.value

        if(name === "gender"){
            val = Number(val)
            setGender(val)
        }

        if(name === "age"){
            val = Number(val)
            setAge(val)
        }

        if(name === "graduated"){
            val = val === "1" //if 1 then true
            setGraduated(val)
        }

        entry[name] = val
        console.log("The Edited Student Is:", entry)
    }
    const ageOptions = [];
        for (let age = 17; age <= 120; age++) {
            ageOptions.push(<option value={age}>{age}</option>);
        }

    useEffect(()=>{
        let id_val = window.location.search
        if (id_val){
            id_val = id_val.split("=")[1]
            setId(id_val)
            fetch("api/student/"+id_val)
            .then(r => r.json())
            .then(d => {
                setData(d);
                setGender(d.gender);
                setGraduated(d.graduated);
                setAge(d.age);
            console.log("the students are: ", d);
        })
        .catch(e => console.log("the error getting student to update: ", e))
        }  
    })

    return  (
        <section className="m-20">
            <h1>Edit Student</h1>

            <div>
                <label htmlFor="fn">First Name</label>
                <input type="text" name="firstName" id="fn" defaultValue={data.firstName} onChange={editedData}/>
            </div>

            <div>
                <label htmlFor="ln">Last Name</label>
                <input type="text" name="lastName" id="ln" defaultValue={data.lastName} onChange={editedData}/>
            </div>

            <div>
                <label htmlFor="dp">Department</label>
                <input type="text" name="department" id="dp" defaultValue={data.department} onChange={editedData}/>
            </div>

            <div>
                <label htmlFor="cn">Class Name</label>
                <input type="text" name="className" id="cn" defaultValue={data.className} onChange={editedData}/>
            </div>

            <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" defaultValue={gender} onChange={editedData}>
                    <option value={1}>Male</option>
                    <option value={0}>Female</option>
                </select> 
            </div>

            <div>
                <label htmlFor="age">Age</label>
                <select type="text" name="age" id="age" defaultValue={age} onChange={editedData}>
                    {ageOptions}    
                </select>
            </div>
            
            <div>
                <label htmlFor="graduated">Graduated</label>
                <select name="graduated" id="graduated" defaultValue={graduated} onChange={editedData}>
                    <option value={true}>Yed</option>
                    <option value={false}>No</option>
                </select> 
            </div>
            <div className='add-cencel-new-btn'>
                <Link to="/" className="cancel-btn">Cancel</Link>
                <button className="add-btn" onClick={editStudent}>Edit Student</button>
            </div>
        </section>

    )
    }