// This function sends the actual pop-up to the desktop
function showHomeScreenNotification() {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon128.png',
    title: 'Cold Case Reminder Active',
    message: 'Keeping justice in sight. A new cold case is featured every day. Click the pin icon to see today\'s case.',
    priority: 2,
    requireInteraction: true // This keeps the notification on the screen until you click it
  });
}

// 1. Pop up when the extension is first installed or updated
chrome.runtime.onInstalled.addListener(() => {
  showHomeScreenNotification();
});

// 2. Pop up whenever the user opens Chrome
chrome.runtime.onStartup.addListener(() => {
  showHomeScreenNotification();
});
