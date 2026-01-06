document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('tipButton');
    btn.addEventListener('click', function() {
        chrome.tabs.create({url: 'https://www.metrodenvercrimestoppers.com/'});
    });
});
