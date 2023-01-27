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


/* WORK IN PROGRESS FOR CONTENT SCRIPT
// This is the function that will send our message to the content script.
// It is asyncronous because we want to use the "await" keyword inside it,
// which lets us wait for something to complete. In this case we wait for
// a response from the content script.
async function sendMessageToContentScript(message) {
  // This code came from the Chrome extension documentation. It just gets
  // the currently active tab on the last focused window to ensure that we
  // send the message to the right place.
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  // We use the "await" keyword to wait for a response from the content
  // script. If you don't need a response, you can just run
  // "chrome.tabs.sendMessage(tab.id, message)" and omit the "const response = await"
  chrome.tabs.sendMessage(tab.id, message);
}

const toggleSwitch = document.getElementById("enable");

const saveToggleValueAndSendMessage = (e) => {
  // e.target.value gets the current value of the target element,
  // which in this case is the toggle input
  let toggleValue = e.target.checked;

  // We use chrome.storage.sync.set to set the key "toggle" equal to the value
  // of toggleValue
  chrome.storage.sync.set({toggle: toggleValue});

  // We call sendMessageToContentScript with the same information
  sendMessageToContentScript({toggle: toggleValue});
};

// Add an event listener to the toggle input that will run the
// saveToggleValueAndSendMessage function whenever there is any human input
toggleSwitch.addEventListener("change", saveToggleValueAndSendMessage);
// You could use "input" instead of "change" here to send the message
// continually, but this will run into issues because it will try to set
// values in Chrome storage more times than the max number of times per minute

// This code will run when the popup is opened. It asks chrome storage to get
// the current value of "toggle"
chrome.storage.sync.get(["toggle"], (result) => {
  // Console.log the result - remember to open your popup console to see this!
  console.log(result); // This will console.log { toggle: "true" } (or whatever the stored toggle was)
  // Set the value of the toggle input to whatever the stored toggle is
  toggleSwitch.value = result.toggle;
});
*/