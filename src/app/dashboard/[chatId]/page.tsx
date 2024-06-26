"use client";
import { useParams } from "next/navigation";
import ChatApp from "@/app/dashboard/page";

const Chat = () => {
  const params = useParams();
  const { chatId } = params;

  if (!chatId) return null;

  return <ChatApp initialSelectedChatId={chatId as string} />;
};
export default Chat;
