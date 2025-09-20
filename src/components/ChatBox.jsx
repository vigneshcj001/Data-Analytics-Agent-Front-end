import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import API from "../api";

function ChatBox({ fileName, apiKey }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || sending) return;
    setSending(true);

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    const formData = new FormData();
    formData.append("filename", fileName);
    formData.append("question", newMessage.text);
    formData.append("api_key", apiKey);

    try {
      const res = await axios.post(`${API}/chat`, formData);

      if (res.data.error) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: res.data.error },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: res.data.answer },
        ]);

        if (res.data.chart_base64) {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              chart: res.data.chart_base64,
              chart_filename: res.data.chart_filename,
            },
          ]);
        }
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "❌ Error occurred" },
      ]);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="mt-4 border rounded-xl p-3 sm:p-4 bg-white shadow-inner">
      {/* Messages */}
      <div className="h-60 sm:h-72 md:h-80 lg:h-96 overflow-y-auto space-y-3 pr-2">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-2 sm:p-3 rounded-xl max-w-[85%] text-sm sm:text-base ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
            {msg.chart && (
              <div className="mt-2">
                <img
                  src={`data:image/png;base64,${msg.chart}`}
                  alt={msg.chart_filename || "chart"}
                  className="rounded-lg shadow-md max-w-full"
                />
                {msg.chart_filename && (
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {msg.chart_filename}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="mt-3 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="💬 Ask about your data..."
          className="flex-1 border rounded-lg px-3 py-2 sm:px-4 sm:py-2 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || sending}
          className="bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          {sending ? "Sending..." : "Send ➤"}
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
