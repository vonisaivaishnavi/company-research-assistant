import Message from "./Message";

function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg, index) => (
        <Message
          key={index}
          message={msg}
        />
      ))}
    </div>
  );
}

export default ChatWindow;