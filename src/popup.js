import React, { useState, useEffect } from 'react';
import browser from 'webextension-polyfill'; // Import the polyfill

const Popup = () => {
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    // Listen for messages from content script
    browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === 'testMessage') {
        console.log('Received message:', message.data);
      }
    });
  }, []);

  return (
    <div className="popup">
      {songInfo ? (
        <div className="song-info">
          <img src={songInfo.albumImage} alt="Album Cover" />
          <h2>{songInfo.title}</h2>
          <p>{songInfo.artist}</p>
          <p>Duration: {Math.floor(songInfo.duration_ms / 1000)} seconds</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Popup;

