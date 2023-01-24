function listen(eventType, selector, callback) {
  document.querySelector(selector).addEventListener(eventType, callback);
}

const image = chrome.runtime.getURL("images/cny-32.png")

function sendMessageToContentScript(message) {
  if (message == true) { // toggle was enabled; change cursor
    changeCursor(); // function to change cursor to the specified image
  } else { // toggle is not enabled; don't change cursor
    document.body.style.cursor = 'default'; // change cursor to default
  }
}

function changeCursor() {
  document.body.style.cursor = "url(" + image + "), help";    
}

listen("change", "#enable", (e) =>
  // Send a message to the content script with the current value of the checkbox
  sendMessageToContentScript(e.target.checked)
);