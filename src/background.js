// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getSongInfo') {
      // Simulate fetching song info
      const songInfo = {
        title: 'Despacito',
        artist: 'Luis Fonsi',
        albumImage: 'https://example.com/despacito-album.jpg',
        duration_ms: 234000
      };
      sendResponse({ success: true, songInfo });
    }
  });
  