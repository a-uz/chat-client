import React from "react";
import { Message } from "./Message";
import { NewMessage } from "./NewMessage";
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
  const [messages, setMessages] = React.useState(defaultMessages);

  function onSendMessage(message: string) {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages[prevMessages.length - 1].id + 1,
        author: "Anonymous",
        content: message,
      },
    ]);
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

      <NewMessage onSend={onSendMessage} />
    </div>
  );
}
