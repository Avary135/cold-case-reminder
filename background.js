// Function to show the notification with the two buttons
function showNotification() {
  chrome.notifications.create('coldCaseNotify', {
    type: 'basic',
    iconUrl: 'icon128.png',
    title: 'Daily Cold Case Alert',
    message: 'Help seek justice today. View the case details or follow updates on Facebook.',
    priority: 2,
    requireInteraction: true,
    buttons: [
      { title: 'Open Website' },
      { title: 'Visit Facebook' }
    ]
  });
}

// 1. Show notification when the extension is installed or reloaded
chrome.runtime.onInstalled.addListener(() => {
  showNotification();
});

// 2. Logic to handle the button clicks
chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
  if (notificationId === 'coldCaseNotify') {
    if (buttonIndex === 0) {
      // First Button: Official Website
      chrome.tabs.create({ url: 'https://www.metrodenvercrimestoppers.com/' });
    } else if (buttonIndex === 1) {
      // Second Button: Facebook Page
      chrome.tabs.create({ url: 'https://www.facebook.com/metrodenvercrimestoppers/' });
    }
  }
});

// 3. Optional: Clicking the notification text itself also opens the website
chrome.notifications.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://www.metrodenvercrimestoppers.com/' });
});
