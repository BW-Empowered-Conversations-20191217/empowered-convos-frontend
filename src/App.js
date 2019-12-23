import React, {useState} from 'react';
import './App.css';
import Profile from "./Profile";
import data from "./data";

const App = () => {

  const [Data, setData] = useState(data);

  const newData = user => {
    setData([...Data, user])
  }

  return (
    <div>
      <Profile UserData={Data} />
      <h2> Hey</h2>
      </div>
  ) }



export default App
