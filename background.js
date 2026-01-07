// Function to create the notification
function showNotification() {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon128.png',
    title: 'Daily Cold Case Alert',
    message: 'A new cold case has been featured today. Click to help seek justice.',
    priority: 2,
    requireInteraction: true 
  });
}

// 1. Set the alarm when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  // Create an alarm that goes off every 1440 minutes (24 hours)
  chrome.alarms.create("dailyCaseAlarm", {
    delayInMinutes: 1, // First one pops up 1 minute after install
    periodInMinutes: 1440 // Then repeat every 24 hours
  });
  showNotification(); // Show one immediately on install
});

// 2. Listen for the alarm and show the notification
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "dailyCaseAlarm") {
    showNotification();
  }
});

// 3. Make the notification clickable
chrome.notifications.onClicked.addListener(() => {
  chrome.tabs.create({ 
    url: 'https://www.metrodenvercrimestoppers.com/',
    active: true 
  });
});
