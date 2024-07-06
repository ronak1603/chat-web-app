"use client";
import { useEffect } from "react";
import useChatStore from "@/store/useChatStore";
import ChatList from "@/components/Dashboard/Chats";
import ChatWindow from "@/components/Dashboard/ChatWindow";
import EmptyState from "@/components/Dashboard/EmptyState";

type ChatAppProps = {
  initialSelectedChatId?: string;
};

const ChatAppInner = () => {
  const chats = useChatStore((state) => state.chats);
  const selectedChatId = useChatStore((state) => state.selectedChatId);
  const selectChat = useChatStore((state) => state.selectChat);
  const sendMessage = useChatStore((state) => state.sendMessage);

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r border-gray-200">
        <ChatList chats={chats} onSelectChat={selectChat} />
      </div>
      <div className="w-2/3">
        {selectedChat ? (
          <ChatWindow chat={selectedChat} onSendMessage={sendMessage} />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

const ChatApp = ({ initialSelectedChatId }: ChatAppProps) => {
  const selectChat = useChatStore((state) => state.selectChat);

  useEffect(() => {
    if (initialSelectedChatId) {
      selectChat(initialSelectedChatId);
    }
  }, [initialSelectedChatId, selectChat]);

  return <ChatAppInner />;
};

export default ChatApp;
