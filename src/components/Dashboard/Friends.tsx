import Image from "next/image";
import avatar from "@/assets/icons/avatar.svg";
import Link from "next/link";

interface ChatItemProps {
  chat: {
    id: string;
    name: string;
    messages: { sender: string; text: string; timestamp: string }[];
  };
  onSelectChat: (id: string) => void;
}

const ChatItem = ({ chat, onSelectChat }: ChatItemProps) => {
  const lastMessage = chat.messages[chat.messages.length - 1];

  return (
    <Link href={`/dashboard/${chat.id}`}>
      <div
        className="flex items-center p-4 cursor-pointer border-b border-gray-200 hover:bg-gray-100"
        onClick={() => onSelectChat(chat.id)}
      >
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={avatar}
            alt="User Avatar"
            className="w-full h-full object-cover"
            width={50}
            height={50}
          />
        </div>
        <div className="ml-4 flex-1">
          <div className="font-bold">{chat.name}</div>
          <div className="text-sm text-gray-600">{lastMessage.text}</div>
        </div>
        <div className="text-xs text-gray-500">{lastMessage.timestamp}</div>
      </div>
    </Link>
  );
};

export default ChatItem;
