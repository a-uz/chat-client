import React from "react";
import "./NewMessage.css";

interface NewMessage {
  onSend: (message: string) => void;
}

export function NewMessage(props: NewMessage) {
  const [message, setMessage] = React.useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message) {
      return;
    }

    props.onSend(message);
    setMessage("");
  }

  function onMessageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }

  return (
    <form className="new-message" onSubmit={onSubmit}>
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
  );
}
