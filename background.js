// Function to create the notification
function sendNotification() {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon128.png',
    title: 'Daily Cold Case Alert',
    message: 'A new cold case has been featured. Help us seek justice.',
    priority: 2
  });
}

// 1. Create an alarm when installed
chrome.runtime.onInstalled.addListener(() => {
  // This creates a timer to go off 1 minute after installation
  chrome.alarms.create("presentationTimer", { delayInMinutes: 1 });
  // Also send one immediately to test
  sendNotification();
});

// 2. Listen for the alarm
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "presentationTimer") {
    sendNotification();
  }
});
