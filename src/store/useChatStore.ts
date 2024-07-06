import { Chat, Message } from "@/types/chat";
import { Friends } from "@/utils/constants";
import create from "zustand";

interface ChatState {
  chats: Chat[];
  selectedChatId: string | null;
  selectChat: (id: string) => void;
  sendMessage: (chatId: string, message: Message) => void;
}

const useChatStore = create<ChatState>((set) => ({
  chats: Friends,
  selectedChatId: null,
  selectChat: (id: string) => set({ selectedChatId: id }),
  sendMessage: (chatId: string, message: Message) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      ),
    })),
}));

export default useChatStore;
