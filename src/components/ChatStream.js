import React from "react";

import ChatMessage from "./ChatMessage";

import "./ChatStream.css";

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream({ messages, currentUser }) {
  return (
    <section className="chat-stream">
      {messages.map((message, index) => {
        let messageType = "";
        if (currentUser === message.user) {
          messageType = "sent";
        } else {
          messageType = "received";
        }
        return (
          <ChatMessage
            message={message}
            messageType={messageType}
            key={`${message.user.username} + ${index} `}
          />
        );
      })}
    </section>
  );
}

export default ChatStream;
