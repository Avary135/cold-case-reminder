// This function creates the notification
function sendColdCaseNotification() {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon128.png',
        title: 'Daily Cold Case Update',
        message: 'A new case has been featured. Click to view details and help seek justice.',
        priority: 2
    });
}

// 1. Send a notification as soon as the extension is installed
chrome.runtime.onInstalled.addListener(() => {
    sendColdCaseNotification();
});

// 2. Send a notification whenever the browser is opened
chrome.runtime.onStartup.addListener(() => {
    sendColdCaseNotification();
});
