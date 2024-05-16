import '../custom.css';

const entry = {
    id: "",
    firstName: "",
    lastName: "",
    department: "",
    className: "",
    gender: "",
    age: "",
}
export default function New (props) {

    const newData = (e) => {
        const name = e.target.name;
        const val = e.target.value

        if(name === "gender"){
            val = Number(val)
        }

        if(name === "age"){
            val = Number(val)
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
                <input type="text" name="lastName" id="fn" onChange={newData}/>
            </div>

            <div>
                <label htmlFor="dp">Department</label>
                <input type="text" name="department" id="fn" onChange={newData}/>
            </div>

            <div>
                <label htmlFor="cn">Class Name</label>
                <input type="text" name="className" id="fn" onChange={newData}/>
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
                <select type="text" name="age" id="fn" onChange={newData}>
                    {ageOptions}    
                </select>
            </div>
            
            <div>
                <label htmlFor="graduated">Graduated</label>
                <select name="isGraduates" id="graduated" onChange={newData}>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                </select> 
            </div>
        </section>
    )
}