import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import '../../styles.css';
import Message from '../Message.js';
import Demo from '../../data.js';
import '../../vystyle.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

const Messages = () => {
  return (
    <div className="bg">
      <div className="containerMessages">
        <div>
          <div className="top">
            <h1 className="title">Messages</h1>
          </div>
          <div className="search-bar">
            <SearchIcon className="search-icon"/>
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
          </div>

          <div>
            {Demo.map((item, index) => (
              // Wrap each message button with a Link component
              <Link
                key={index}
                to={`/chat/${item.id}`} // Specify the target URL with the message's unique identifier
                style={{ textDecoration: 'none' }} // Remove underlines from links
              >
                <button className="vy-button">
                  <Message
                    image={item.image}
                    name={item.name}
                    lastMessage={item.message}
                  />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
