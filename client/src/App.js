import "./App.css";
import SelectSection from "./components/SelectSection";
import { useState } from "react";
import Message from "./components/Message";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
function App() {
  // create string state for section:
  const [program, set_program] = useState("");
  const [dec, set_dec] = useState("");
  const [msg, setmsg] = useState("");
  const [sem, set_sem] = useState("");
  const [sec, set_sec] = useState("");
  const [room, set_room] = useState("");
  const join_Room = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  const sendmessage = () => {
    const make_room = `${program}${dec}${sem}${sec}`;
    set_room(make_room);
    join_Room();
    console.log(make_room);
    socket.emit("send_message", { message: msg,room:room });
    console.log(msg);
    setmsg("");
    set_program("");
    set_dec("");
    set_sem("");
    set_sec("");
  };
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <header className="">
        <h1>notification App</h1>
        <p>Select the section</p>
        <p>program:{program}</p>
        <p>Decipline:{dec}</p>
        <p>Message:{msg}</p>
        <p>semester:{sem}</p>
        <p>section:{sec}</p>
        <SelectSection
          program={program}
          set_program={set_program}
          dec={dec}
          set_dec={set_dec}
          sem={sem}
          set_sem={set_sem}
          sec={sec}
          set_sec={set_sec}
        />
        <Message msg={msg} setmsg={setmsg} />
        <button onClick={sendmessage}>Send</button>
      </header>
    </div>
  );
}

export default App;
