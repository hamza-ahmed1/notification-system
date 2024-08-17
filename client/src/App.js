import './App.css';
import SelectSection from './components/SelectSection';
import { useState } from 'react';
import Message from './components/Message';

function App() {
  // create string state for section:
  const [section,set_section]=useState("");
  const [msg,setmsg]=useState("");

  const sendmessage=()=>{
console.log(msg);
setmsg("");
set_section("")
  }
  const [data,setData]=useState([]);
  return (
    <div className="App">
      <header className="">
      <h1>notification App</h1>
      <p>Select the section</p>
      <p>section:{section}</p>
      <SelectSection section={section} set_section={set_section}/>
      <Message msg={msg} setmsg={setmsg}/>
      <button onClick={sendmessage}>Send</button>
      </header>
    </div>
  );
}

export default App;
