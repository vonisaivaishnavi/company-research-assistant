import ReactMarkdown from "react-markdown";

function Message({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex mb-4 ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          isUser
            ? "bg-blue-500 text-white"
            : "bg-white border"
        }`}
      >
        <ReactMarkdown>
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Message;