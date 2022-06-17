import './App.css';
import React, {useState} from 'react';
import Button from '@mui/material/Button';


function App() {
  const [returnData, setReturnedData] = useState(['Welcome to my Project']);
  const [employee, setEmployee] = useState({EmployeeID: 0, firstname: '', lastname: '', Age: 0, Gender: ''})

const setInput = (e) => {
  const {name, value} = e.target;
  console.log(value);
  if(name === 'EmployeeID' || name === 'Age'){
    setEmployee(prevState => ({
      ...prevState,
      [name]: parseInt(value)
    }));
    return;
  }
  setEmployee(prevState => ({
    ...prevState,
    [name]: value 
  }));
}

  const fetchData = async () => {
   const newData = await fetch('./api', {
     method: 'POST',
     headers: {
       'content-type':'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify({
       name: employee.firstname
     })
   })
   .then(res => res.json())
   console.log(newData);
   setReturnedData(newData[0])
  }
  
  const createEmployee = async () => {
   const newData = await fetch('./quit', {
     method: 'POST',
     headers: {
       'content-type':'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify({
       ...employee
     })
   })
   .then(res => res.json())
   setReturnedData(newData[0])
  }

  // if(getEmployee){

  // }


  return (
  <div className="App">
    <input 
      type="number" 
      name="EmployeeID" 
      placeholder="EmployeeID" 
      onChange={setInput}></input>
    <input 
      name="firstname" 
      placeholder="FirstName" 
      onChange={setInput}></input>
    <input 
      name="lastname" 
      placeholder="LastName" 
      onChange={setInput}></input>
    <input 
      type="number" 
      name="Age" 
      placeholder="Age" 
      onChange={setInput}></input>
    <input 
    name="Gender" 
    placeholder="Gender" 
    onChange={setInput}></input>
    <button onClick={() => fetchData()}>Click</button>
    <button onClick={() => createEmployee()}>Create</button>
    {/* <button onClick={() => this.handleClick(onClick)} /> */}
    <p>EmployeeID:{returnData.JUDGE}</p>
    <p>firstname:{returnData['DEPUTY COURT CLERK']}</p>
    <p>lastname:{returnData.ROOM}</p>
    <p>Age:{returnData.PHONE}</p>
    <p>Gender:{returnData.PHONE}</p>
    {/* {returnData} */}
    <Button variant="contained" sx={{color: 'black'}}>Contained</Button>
  </div>
  );
}

export default App;


//const input name;
//if(inputname !-- returnData.JUDGE){
//console.log('Name not found')
//}