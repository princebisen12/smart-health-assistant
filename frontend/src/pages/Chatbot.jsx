import { useState } from "react";

function Chatbot() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {

    if (message.trim() === "") return;

    const userMessage = {
      sender: "User",
      text: message,
    };

    // Dummy AI Response
    const botMessage = {
      sender: "AI",
      text: `You asked: "${message}"`,
    };

    setChat([...chat, userMessage, botMessage]);

    setMessage("");
  };

  return (
    <div style={styles.container}>

      <div style={styles.chatBox}>

        <h1 style={styles.title}>
          AI Healthcare Chatbot
        </h1>

        <div style={styles.messages}>

          {chat.map((msg, index) => (
            <div
              key={index}
              style={
                msg.sender === "User"
                  ? styles.userMessage
                  : styles.botMessage
              }
            >
              <strong>{msg.sender}: </strong>
              {msg.text}
            </div>
          ))}

        </div>

        <div style={styles.inputContainer}>

          <input
            type="text"
            placeholder="Ask healthcare questions..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.input}
          />

          <button onClick={handleSend} style={styles.button}>
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f7fb",
  },

  chatBox: {
    width: "500px",
    height: "600px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },

  title: {
    textAlign: "center",
    color: "#0077b6",
    marginBottom: "20px",
  },

  messages: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "15px",
  },

  userMessage: {
    backgroundColor: "#0077b6",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    textAlign: "right",
  },

  botMessage: {
    backgroundColor: "#caf0f8",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
  },

  inputContainer: {
    display: "flex",
    gap: "10px",
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  button: {
    padding: "12px 20px",
    backgroundColor: "#0077b6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Chatbot;