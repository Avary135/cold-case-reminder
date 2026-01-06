// Function to send the notification to the desktop
function showHomeScreenNotification() {
  chrome.notifications.create('coldCaseNotify', {
    type: 'basic',
    iconUrl: 'icon128.png',
    title: 'Cold Case Reminder Active',
    message: 'Justice doesn\'t have an expiration date. Click here to see today\'s featured case.',
    priority: 2,
    requireInteraction: true 
  });
}

// 1. Pop up when the extension is installed or reloaded
chrome.runtime.onInstalled.addListener(() => {
  showHomeScreenNotification();
});

// 2. Pop up whenever Chrome starts
chrome.runtime.onStartup.addListener(() => {
  showHomeScreenNotification();
});

// 3. NEW: This makes the notification clickable!
chrome.notifications.onClicked.addListener((notificationId) => {
  if (notificationId === 'coldCaseNotify') {
    // This opens the Crime Stoppers site automatically when they click the pop-up
    chrome.tabs.create({ url: 'https://www.metrodenvercrimestoppers.com/' });
  }
});
