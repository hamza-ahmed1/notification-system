import './App.css';
import SelectSection from './components/SelectSection';
import { useState } from 'react';
import Message from './components/Message';

function App() {
  // create string state for section:
  const [program,set_program]=useState("");
  const [dec,set_dec]=useState("");
  const [msg,setmsg]=useState("");

  const sendmessage=()=>{
console.log(msg);
setmsg("");
set_program('')
set_dec("")
  }
  const [data,setData]=useState([]);
  return (
    <div className="App">
      <header className="">
      <h1>notification App</h1>
      <p>Select the section</p>
      <p>program:{program}</p>
      <p>Decipline:{dec}</p>
      <SelectSection program={program} set_program={set_program} dec={dec} set_dec={set_dec}/>
      <Message msg={msg} setmsg={setmsg}/>
      <button onClick={sendmessage}>Send</button>
      </header>
    </div>
  );
}

export default App;
