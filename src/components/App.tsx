import React from "react";
import { Chat } from "./chat/Chat";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Chat title="Chatty Chat" nickname="Anonymous" />
    </div>
  );
}

export default App;
