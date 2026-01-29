import { useState, useRef } from "react";

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const fileRef = useRef(null);

  const send = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      { role: "bot", text: "🤖 Backend connect hone wala hai..." },
    ]);
    setInput("");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    setMessages((prev) => [
      ...prev,
      { role: "user", image: imageURL },
      { role: "bot", text: "🖼️ Nice image! (AI soon)" },
    ]);
  };

  return (
    <div className="chat-window">
      {/* HEADER */}
      <div className="chat-header">
        <div className="title">
          <span className="ai-dot"></span>
          New AI chat
        </div>
        <span className="close-btn" onClick={onClose}>✕</span>
      </div>

      {/* BODY */}
      <div className="chat-body">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>
            {m.text && <p>{m.text}</p>}
            {m.image && <img src={m.image} alt="upload" />}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <span
          className="plus-btn"
          onClick={() => fileRef.current.click()}
        >
          ＋
        </span>

        <input
          placeholder="Do anything with AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />

        <button onClick={send}>↑</button>

        {/* hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          style={{ display: "none" }}
          onChange={handleImage}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
