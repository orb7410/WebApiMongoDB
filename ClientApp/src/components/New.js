import '../custom.css';
import { Link } from 'react-router-dom';
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
export default function New (props) {

    const addNewStudent = () => {
        console.log("The New Student Is: ", entry)
        fetch("api/student", {
            method: "POST",
            body:entry,
            headers:{
                "content-type": "application/json"
            }
        }).then(r=>{
            console.log("Response from backend for adding new student", r)
            window.location = "/"
        }).catch(e=>console.log("Error adding new student: ", e))
    }


    const newData = (e) => {
        const name = e.target.name;
        let  val = e.target.value

        if(name === "gender"){
            val = Number(val)
        }

        if(name === "age"){
            val = Number(val)
        }

        if(name === "graduated"){
            val = val === "1" //if 1 then true
        }

        entry[name] = val
        console.log("The New Student Is:", entry)
  }
  const ageOptions = [];
        for (let age = 17; age <= 120; age++) {
            ageOptions.push(<option value={age}>{age}</option>);
        }
    return  (
        <section className="m-20">
            <h1>Add New Student</h1>

            <div>
                <label htmlFor="fn">First Name</label>
                <input type="text" name="firstName" id="fn" onChange={newData}/>
            </div>

            <div>
                <label htmlFor="ln">Last Name</label>
                <input type="text" name="lastName" id="ln" onChange={newData}/>
            </div>

            <div>
                <label htmlFor="dp">Department</label>
                <input type="text" name="department" id="dp" onChange={newData}/>
            </div>

            <div>
                <label htmlFor="cn">Class Name</label>
                <input type="text" name="className" id="cn" onChange={newData}/>
            </div>

            <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" onChange={newData}>
                    <option value={1}>Male</option>
                    <option value={0}>Female</option>
                </select> 
            </div>

            <div>
                <label htmlFor="age">Age</label>
                <select type="text" name="age" id="age" onChange={newData}>
                    {ageOptions}    
                </select>
            </div>
            
            <div>
                <label htmlFor="graduated">Graduated</label>
                <select name="graduated" id="graduated" onChange={newData}>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                </select> 
            </div>
            <div className='add-cencel-new-btn'>
                <Link to="/" className="cancel-btn">Cancel</Link>
                <button className="add-btn" onClick={addNewStudent}>Add Student</button>
            </div>
        </section>

    )
    }