import React from "react";
import { Message } from "./Message";
import "./Chat.css";

const defaultMessages = [
  { id: 1, author: "Anonymous", content: "Hello, World!" },
  {
    id: 2,
    author: "Anonymous",
    content: "Hello, Person!",
  },
];

interface ChatProps {
  name: string;
}

export function Chat(props: ChatProps) {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState(defaultMessages);

  function onSendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message) {
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages[prevMessages.length - 1].id + 1,
        author: "Anonymous",
        content: message,
      },
    ]);
    setMessage("");
  }

  function onMessageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }

  return (
    <div className="chat">
      <header className="header">
        <h1>{props.name}</h1>
      </header>

      <div className="messages">
        {messages.map((message) => (
          <Message
            key={message.id}
            author={message.author}
            content={message.content}
          />
        ))}
      </div>

      <form className="new-message" onSubmit={onSendMessage}>
        <input
          type="text"
          name="message"
          className="compose-message"
          placeholder="Type something nice in here and press send!"
          value={message}
          onChange={onMessageChange}
        />
        <button type="submit" className="send-message">
          Send
        </button>
      </form>
    </div>
  );
}
