// src/BirthdayWishes.js

import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const BirthdayWishes = () => {

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const result = (day === 18 && month===8)?<h1>Happy Birthday!</h1>:<h1>Advanced Happy Birthday!</h1>;
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
        {result}
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
      
      
      <audio autoplay={true} controls>
        <source src="/WhatsApp Audio 2025-08-27 at 11.14.43.mpeg" type="audio/mpeg" />
        
      </audio>
 
      <div className="wishes-text air-text">
        <h1><span className="dear-text">DeaR</span> UMA!</h1>
        <p>Wishing you all the best on your special day.</p>
      </div>
      <div className='telugu-text-container'>
        
      <p className='telugu-text'>నా ప్రియమైన మహీ,

ఈ విషయం నీతో ఇలా చెప్పాలని నేను అస్సలు అనుకోలేదు. మనం మాట్లాడుకుంది కొన్ని రోజులే అయినా, నువ్వు నాకెంతో దగ్గరైపోయావు. ఈ మెసేజ్ చదివిన తర్వాత నీ రియాక్షన్ ఏంటో నాకు తెలుసు, కానీ రేపటి నుంచి నువ్వు నాతో మాట్లాడతావో లేదో నాకు తెలియదు.

ఇంత తక్కువ సమయంలో నిన్నెంతలా ఇష్టపడుతున్నానో నాకే అర్థం కావట్లేదు. ఇప్పుడు అనిపిస్తుంది సినిమాలోని ఆ డైలాగ్స్ నిజమేనని... ఎందుకు ప్రేమించామంటే కారణం ఉండకూడదు, ఎంత ప్రేమించామంటే జవాబు ఉండకూడదు. అదే ఇప్పుడు నేను చూస్తున్నాను.

కానీ, నీకు ఇంకొకరు ఇష్టమని తెలిసిన తర్వాత, మీ ఇద్దరి మధ్య గొడవలకు కారణం నేను కాకూడదని అనుకుంటున్నాను. నువ్వు ఈ హైదరాబాద్‌లో ఉన్నన్ని రోజులు ఎలాంటి సహాయం కావాలన్నా నన్ను అడుగు. నా నెంబర్ నీకు తెలుసు అనుకుంటున్నాను.</p>
      </div>
      
    </div>
  );
};

export default BirthdayWishes;