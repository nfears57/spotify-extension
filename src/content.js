// Trigger authentication
chrome.runtime.sendMessage({ action: 'authenticate' }, (response) => {
    if (response.success) {
      console.log('Authentication successful.');
    } else {
      console.error('Authentication failed:', response.error);
    }
  });

chrome.runtime.sendMessage({ action: 'testMessage', data: 'Hello from content script' });

  
  // Trigger song search
  const songTitle = 'Despacito'; // Replace with the actual song title
  chrome.runtime.sendMessage({ action: 'searchSong', query: songTitle }, (response) => {
    if (response.success) {
      const songData = response.data;
      if (songData.tracks.items.length > 0) {
        const firstSong = songData.tracks.items[0];
        console.log('Song found:', firstSong.name, 'by', firstSong.artists[0].name);
        // Display the song information to the user
      } else {
        console.log('Song not found.');
        // Handle case when the song is not found
      }
    } else {
      console.error('Song search failed:', response.error);
      // Handle error
    }
  });
  