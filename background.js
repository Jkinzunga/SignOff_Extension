// background.js

chrome.browserAction.onClicked.addListener(function(tab) {
    // Open a new tab with the specified URL
    chrome.tabs.create({ url: 'https://www.example.com' });
  });
  