// Function to create the notification
function sendNotification() {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon128.png',
    title: 'Daily Cold Case Alert',
    message: 'A new cold case has been featured today. Click to help seek justice.',
    priority: 2
  });
}

// Trigger when the extension is first installed
chrome.runtime.onInstalled.addListener(() => {
  sendNotification();
});

// Trigger every time Chrome starts up
chrome.runtime.onStartup.addListener(() => {
  sendNotification();
});
