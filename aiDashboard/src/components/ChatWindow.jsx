// src/components/ChatWindow.jsx
import { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { from: "bot",
      text: "Welcome! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "This is a demo AI reply." },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] justify-between p-4 overflow-hidden">
      <div className="overflow-y-auto flex-1 mb-2 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded max-w-[70%] ${
              msg.from === "user" ? "bg-blue-200 self-end" : "bg-gray-200 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="border p-2 flex-1 rounded ml-22"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
