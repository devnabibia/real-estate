import React, { useState, useEffect, useRef } from "react";
import { pink } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import "./ChatScreen.css";
import SendIcon from '@mui/icons-material/Send';
import ForwardIcon from '@mui/icons-material/Forward';

// Define a function to render the avatar image based on the sender
const renderAvatar = (sender) => {
  if (sender === "ChatBot") {
    // You can adjust the avatar image path as needed
    return (
      <div className="avatarContainer">
        <img
          src={require("../images/Exterior/01.png")}
          alt="Chat Bot"
          className="avatarImage"
        />
      </div>
    );
  }
  // Return null for user's messages
  return null;
};


function ChatScreen() {
  const { chatId } = useParams();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageSender, setMessageSender] = useState("You");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();

    // Create a new message object based on user input
    const newMessage = { sender: "You", message: input, images: [] }; // Use an array to store multiple images

    // Check for specific prompts and provide responses based on chat ID
    let response = null;

    if (input.toLowerCase() === "send pics?") {
      if (chatId === "1") {
        response = {
          sender: "ChatBot",
          message: "Sure!",
          images: [
            require("../images/Interior/01.i.png"),
            require("../images/Interior/01.o.png"),
            require("../images/Interior/01.q.png"),
          ],
        };
      }
      // Add similar conditions for other chat IDs...
    }
    else if (input.toLowerCase() === "eco score?") {
      if (chatId === "1") {
        response = { sender: "ChatBot",
        message: "This property has a 30% Eco-Score" };
      }
      // Add similar conditions for other chat IDs...
    }
    else if (input.toLowerCase() === "price?") {
      if (chatId === "1") {
        response = { sender: "ChatBot",
        message: "The listing price is ksh819,000"};
      }
    }
    else{
        response = { sender: "ChatBot",
        message: "Sorry I didn't understand that. Ask me 'send pics?' or 'price?'"};
    }

    // Add the new message to the chat's messages
    const updatedMessages = [...messages, newMessage];

    // If there's a response, add it to the messages immediately
    if (response) {
      updatedMessages.push(response);
    }

    // Clear the input after handling
    setInput("");

    // Update the messages state with the new input
    setMessages(updatedMessages);
  };

  return (
    <div className="bg">
      <div className="chatScreen">
      <div>
						<h1 className="chattitle">Karen, Hill park Rd </h1>
					</div>
        <div className="chatScreen__messages" ref={chatContainerRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatScreen__message ${message.sender === "You" ? "chatScreen__messageUser" : ""
                }`}
            >
              {renderAvatar(message.sender)} {/* Render the avatar */}
              {message.images && message.images.length > 0 ? (
                <div className="chatScreen__imageContainer">
                  {message.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={`Sent Image ${imageIndex}`}
                      className="chatScreen__image"
                      width={400}
                      height={400}
                    />
                  ))}
                </div>
              ) : (
                <p
                  className={`chatScreen__paragraph ${message.sender === "You"
                      ? "chatScreen__paragraphUser"
                      : ""
                    }`}
                >
                  {message.message}
                </p>
              )}
            </div>
          ))}
        </div>
        <form className="chatScreen__input">
          <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a Message...."
            type="text"
          />
          </div>
          <button
            onClick={handleSend}
            variant="contained"
            className="sendButton"
            style={{ backgroundColor: pink }}
          >
            <SendIcon style={{color:"#FFFFFF"}}/>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
