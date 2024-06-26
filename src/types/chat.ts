export interface Message {
  sender: string;
  text: string;
  timestamp: string;
}

export interface Chat {
  id: string;
  name: string;
  messages: Message[];
}
