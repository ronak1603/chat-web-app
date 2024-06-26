import ChatItem from "./Friends";
import Image from "next/image";
import lock from "@/assets/icons/lock.svg";
import { Chat } from "@/types/chat";

interface ChatListProps {
  chats: Chat[];
  onSelectChat: (id: string) => void;
}

const ChatList = ({ chats, onSelectChat }: ChatListProps) => {
  return (
    <div className="h-screen flex flex-col gap-1 overflow-y-auto">
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} onSelectChat={onSelectChat} />
      ))}
      {/* <div className="h-[2px] w-full bg-gray-500"></div> */}
      <div className="flex gap-1 py-3 items-center justify-center">
        <Image src={lock} alt="lock" width={18} height={18} />
        <span className="text-sm">
          Your personal messages are end-to-end encrypted
        </span>
      </div>
    </div>
  );
};

export default ChatList;
