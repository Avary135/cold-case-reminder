// Function to create the notification
function showNotification() {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon128.png',
    title: 'Cold Case Reminder Active',
    message: 'Justice doesn\'t have an expiration date. Click here to see today\'s featured case.',
    priority: 2,
    requireInteraction: true 
  });
}

// 1. Show notification on Install/Reload
chrome.runtime.onInstalled.addListener(() => {
  showNotification();
});

// 2. Show notification on Browser Startup
chrome.runtime.onStartup.addListener(() => {
  showNotification();
});

// 3. IMPROVED CLICK LISTENER
// Instead of checking for an ID, this tells Chrome: 
// "If ANY notification from this extension is clicked, open the site."
chrome.notifications.onClicked.addListener(() => {
  chrome.tabs.create({ 
    url: 'https://www.metrodenvercrimestoppers.com/',
    active: true // This forces the new tab to jump to the front
  });
});
