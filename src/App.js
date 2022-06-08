import './App.css';
import React, {useState} from 'react';

function App() {
  const [returnData, setReturnedData] = useState(['Welcome to my Project']);
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type':'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData.result)
  } 
  return (
  <div className="App">
    <button onClick={() => getData('/quit')}>Click</button>
    {returnData}
  </div>
  );
}

export default App;
