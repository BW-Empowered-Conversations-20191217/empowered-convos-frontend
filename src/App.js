import React from 'react';
import './App.css';
// import Profile from "./Profile";
// import data from "./data";
import Contact from "./contact"
import Header from './header'
const App = () => {

  // const [Data, setData] = useState(data);

  // const newData = user => {
  //   setData([...Data, user])
  // }

  return (
    <div>
      <Header />
      <Contact />
      {/* <Profile UserData={Data} /> */}
      </div>
  ) }



export default App
