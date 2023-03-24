import { createContext, useState } from "react";

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [message, setMessage] = useState({
    severity: "info",
    content: "",
  });

  const messageHandler = (severity, content) => {
    setMessage({
      severity,
      content,
    });
    setTimeout(() => {
      setMessage({
        severity: "info",
        content: "",
      });
    }, 3000);
  };

  return (
    <MessageContext.Provider value={{ message, messageHandler }}>
      {children}
    </MessageContext.Provider>
  );
}

export default MessageContext;
