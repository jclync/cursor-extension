/*
// Add a message listener that listens for a message from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // This is the whole message object that was sent from the popup

  // Pull out the color key so we can use it later
  const newColor = message.color;

  // Get the current color of the background to send it back to the popup
  const oldColor = getComputedStyle(document.body).backgroundColor;

  // Set the background color to the new color
  document.body.style.backgroundColor = newColor;

  // Use the sendResponse function passed in by chrome to send a response
  sendResponse(`the color has been changed from ${oldColor} to ${newColor}!`);
});

// Get the value of "color" out of Chrome storage. This will run when the page
// is loaded.
chrome.storage.sync.get("color", (result) => {
  // This will console.log whatever is in chrome storage when the page is loaded
  console.log(result); // This will console.log { color: "#ffffff" } (or whatever the stored color was)
  // set the body background color
  document.body.style.backgroundColor = result.color;
});
*/
