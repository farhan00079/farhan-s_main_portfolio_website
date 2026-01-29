import { useState } from "react";
import ChatWindow from "./ChatWindow";
import "./Chatbot.css";

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen((prev) => !prev);
  const closeChat = () => setOpen(false);

  return (
    <>
      {open && <ChatWindow onClose={closeChat} />}

      <div className="chat-fab" onClick={toggleChat}>
        {open ? "✕" : "💬"}
      </div>
    </>
  );
};

export default FloatingChatbot;