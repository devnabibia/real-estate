import React from 'react';
import CardItem from '../CardItem.js';
import Icon from '../Icon.js';
import Demo from '../../data.js';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Matches = () => {
  return (
    <div className="bg">
      <div className="containerMatches" >
        <div>
          <div className="top">
            <h1 className="title">Matches</h1>
            <button className="vy-circle">
              <span className="icon">
                <MoreVertIcon/>
              </span>
            </button>
          </div>

          <div>
            {Demo.map((item, index) => (
              <button key={index} className="vy-card-matches">
                <CardItem
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  variant
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
