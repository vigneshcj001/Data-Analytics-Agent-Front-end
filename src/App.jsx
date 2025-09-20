import { useState } from "react";
import FileUpload from "./components/FileUpload";
import ChatBox from "./components/ChatBox";
import { motion } from "framer-motion";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { TbPresentationAnalyticsFilled } from "react-icons/tb";

function App() {
  const [fileName, setFileName] = useState(null);
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);

  // Trim API key to avoid accidental spaces
  const handleApiKeyChange = (e) => setApiKey(e.target.value.trim());

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-6">
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 text-center sm:text-left">
          <TbPresentationAnalyticsFilled
            className="text-indigo-600"
            size={40}
          />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            Data Analytics Agent
          </h1>
        </div>

        {/* Main Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 space-y-6 border border-gray-100">
          {/* API Key Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-4 sm:p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-200"
          >
            <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
              🔑 Enter your API Key
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={handleApiKeyChange}
                className="flex-1 border rounded-lg px-3 py-2 sm:px-4 sm:py-3 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800 text-sm sm:text-base"
                placeholder="Enter API key..."
              />
              <button
                onClick={() => setShowKey(!showKey)}
                className="px-3 py-2 sm:px-4 sm:py-3 border rounded-lg bg-gray-100 hover:bg-gray-200 transition font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {showKey ? <BiSolidHide size={18} /> : <BiShow size={18} />}
                {showKey ? "Hide" : "Show"}
              </button>
            </div>
          </motion.div>

          {/* File Upload + Chat */}
          {apiKey ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <FileUpload setFileName={setFileName} />
              {fileName && <ChatBox fileName={fileName} apiKey={apiKey} />}
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-red-500 text-center font-semibold text-sm sm:text-lg"
            >
              ⚠️ Please enter your API key to continue
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default App;
