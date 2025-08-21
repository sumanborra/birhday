// src/BirthdayWishes.js

import React from 'react';
import './App.css';

const BirthdayWishes = () => {
  return (
    <div className="birthday-container">
      {/* This is where your animated elements will go */}
      <div className="night-sky">
        {/* Stars will be rendered here */}
      </div>

      <div className="balloons-container">
        
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>

      </div>

      <div className="cake-container">
      <div className="birthday-page">
      <div className="wishes-text">
        <h1>Happy Birthday!</h1>
      </div>

      <div className="cake-container">
        {/* Cake plate */}
        <div className="cake-top">
          <div className="cake-frosting"></div>
        </div>
        <div className="cake-mid">
          <div className="cake-frosting"></div>
        </div>
        
        <div className="cake-base">
          <div className="cake-frosting"></div>
        </div>
        
        <div className="cake-plate"></div>

       
        

        {/* Candles and Flames */}
        <div className="candles-container">
          {/* Candle 1 */}
          <div className="candle-container">
            <div className="candle candle-white">
              <div className="flame"></div>
            </div>
          </div>
          {/* Candle 2 */}
          <div className="candle-container">
            <div className="candle candle-red">
              <div className="flame flame-delayed"></div>
            </div>
          </div>
          {/* Candle 3 */}
          <div className="candle-container">
            <div className="candle candle-blue">
              <div className="flame"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>

      <div className="wishes-text air-text">
        <h1><span className="dear-text">DeaR</span> UMA!</h1>
        <p>Wishing you all the best on your special day.</p>
      </div>
    </div>
  );
};

export default BirthdayWishes;