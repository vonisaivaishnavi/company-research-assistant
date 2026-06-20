import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I am your Company Research Assistant. Which company would you like me to research?",
    },
  ]);

  const [currentPlan, setCurrentPlan] = useState("");

  // ==========================
  // SPEAK AI RESPONSE
  // ==========================

  const speakResponse = (text) => {
    const speech =
      new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    window.speechSynthesis.speak(
      speech
    );
  };

  // ==========================
  // SEND MESSAGE
  // ==========================

  const handleSend = async (text) => {
    console.log(
      "handleSend called:",
      text
    );

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/chat",
        {
          message: text,
        }
      );

      console.log(
        "Backend Response:",
        response.data
      );

      setCurrentPlan(
        response.data.reply
      );

      const steps =
        response.data.steps || [];

      // Show processing steps
      for (
        let i = 0;
        i < steps.length;
        i++
      ) {
        await new Promise(
          (resolve) =>
            setTimeout(resolve, 1000)
        );

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `🔍 ${steps[i]}`,
          },
        ]);
      }

      // Speak AI response
      speakResponse(
        response.data.reply
      );

      // Show AI response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            response.data.reply,
        },
      ]);
    } catch (error) {
      console.error(
        "FULL FRONTEND ERROR"
      );

      console.error(error);

      if (error.response) {
        console.log(
          "Backend Error:"
        );

        console.log(
          error.response.data
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong.",
        },
      ]);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="bg-blue-600 text-white p-4 text-xl font-bold">
        Company Research Assistant
      </div>

      <ChatWindow messages={messages} />

      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default App;