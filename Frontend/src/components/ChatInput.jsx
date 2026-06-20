import { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const [listening, setListening] =
    useState(false);

  const handleSubmit = () => {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech Recognition not supported in this browser"
      );
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    setListening(true);

    recognition.start();

    recognition.onresult = (event) => {
      const transcript =
        event.results[0][0].transcript;

      console.log(
        "Transcript:",
        transcript
      );

      setText(transcript);

      // Auto send
      onSend(transcript);

      setText("");

      setListening(false);
    };

    recognition.onerror = (event) => {
      console.error(
        "Speech Error:",
        event.error
      );

      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <div className="flex p-4 border-t">
      <input
        type="text"
        value={text}
        placeholder="Ask about a company..."
        onChange={(e) =>
          setText(e.target.value)
        }
        className="flex-1 border rounded-lg px-4 py-2"
      />

      <button
        onClick={handleSubmit}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Send
      </button>

      <button
        onClick={startListening}
        className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        {listening
          ? "🎙 Listening..."
          : "🎤"}
      </button>
    </div>
  );
}

export default ChatInput;