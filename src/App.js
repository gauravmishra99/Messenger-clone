import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import Flipmove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({id: doc.id, message: doc.data()})));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <p>Hello World</p>
      <h2>Welcome {username}</h2>
      <form className="app__forms">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder='Enter a Message...' value={input} onChange={(e) => setInput(e.target.value)} />
          
          <IconButton 
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>

      {/* message themselves*/}
      <Flipmove>
        {messages.map(({id,message}) => (
          <Message key={id} username={username} message={message} />
        ))}
      </Flipmove>
    </div>
  );
}

export default App;
