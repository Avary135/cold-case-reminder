// PART 1: This makes the "Report" button work
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('tipButton');
    if (btn) {
        btn.addEventListener('click', function() {
            chrome.tabs.create({url: 'https://www.metrodenvercrimestoppers.com/'});
        });
    }
});

// PART 2: This sends a notification when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon128.png', 
    title: 'Cold Case Alert',
    message: 'Thank you for helping us seek justice. Click the pin icon to keep these cases visible.',
    priority: 2
  });
});
