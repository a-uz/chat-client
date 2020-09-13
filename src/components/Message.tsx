import React from "react";
import "./Message.css";

interface MessageProps {
  author: string;
  content: string;
}

export function Message(props: MessageProps) {
  return (
    <div className="message">
      <div className="author">{props.author}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}
