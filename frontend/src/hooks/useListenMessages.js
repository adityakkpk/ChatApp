import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContex";
import useConversation from "../zustand/useConversation";

import notification from "../assets/sound/notification.mp3"

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (message) => {
      message.shouldShake = true;
      const sound = new Audio(notification);
      sound.play();
      setMessages([...messages, message]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
