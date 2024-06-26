"use client";
import Image from "next/image";
import { useState } from "react";
import avatar from "@/assets/icons/avatar.svg";
import { Chat, Message } from "@/types/chat";

interface ChatWindowProps {
  chat: Chat;
  onSendMessage: (chatId: string, message: Message) => void;
}

const ChatWindow = ({ chat, onSendMessage }: ChatWindowProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(chat.id, {
        sender: "self",
        text: message,
        timestamp: new Date().toLocaleTimeString(),
      });
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-4 bg-primary text-white">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={avatar}
            alt="User Avatar"
            className="w-full h-full object-cover"
            width={50}
            height={50}
          />
        </div>
        <div className="ml-4">{chat.name}</div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {chat.messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${msg.sender === "self" ? "text-right" : ""}`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                msg.sender === "self" ? "bg-green-200" : "bg-white"
              }`}
            >
              {msg.text}
            </div>
            <div className="text-xs text-gray-500">{msg.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="w-full p-2 border rounded-full"
          onKeyDown={(e) => (e.key === "Enter" ? handleSend() : null)}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
