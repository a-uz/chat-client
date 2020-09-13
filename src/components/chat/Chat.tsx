import React from "react";
import { v4 as uuid } from "uuid";
import { Message } from "./Message";
import { NewMessage } from "./NewMessage";
import "./Chat.css";

interface ChatMessage {
  id: string;
  author: string;
  message: string;
}

interface ChatProps {
  title: string;
  nickname: string;
}

export function Chat(props: ChatProps) {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);

  function onSendMessage(message: string) {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: uuid(),
        author: props.nickname,
        message,
      },
    ]);
  }

  return (
    <div className="chat">
      <header className="header">
        <h1>{props.title}</h1>
      </header>

      <div className="messages">
        {messages.map((message) => (
          <Message
            key={message.id}
            author={message.author}
            content={message.message}
          />
        ))}
      </div>

      <NewMessage onSend={onSendMessage} />
    </div>
  );
}
