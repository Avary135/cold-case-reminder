// 1. THE CASE DATABASE
// You can add more cases here. Just make sure there is a comma between each { } block.
const coldCases = [
    {
        name: "Jane Doe (1998)",
        desc: "Last seen near Colfax Ave. Investigators are looking for a green sedan seen in the area."
    },
    {
        name: "John Smith (2005)",
        desc: "Found in Cherry Creek Park. Witnesses reported hearing a dispute near the trailhead."
    },
    {
        name: "Unnamed Case #402 (1982)",
        desc: "A cold case from Denver's historic district. New DNA evidence is being processed."
    }
];

// 2. THIS RUNS WHEN YOU CLICK THE EXTENSION ICON
document.addEventListener('DOMContentLoaded', function() {
    
    // Pick a case based on the day of the year
    const dayOfYear = Math.floor(new Date() / 8.64e7); 
    const caseIndex = dayOfYear % coldCases.length;
    const todayCase = coldCases[caseIndex];

    // Put the text into the HTML
    const nameElement = document.getElementById('caseName');
    const descElement = document.getElementById('caseDescription');
    
    if (nameElement) nameElement.textContent = todayCase.name;
    if (descElement) descElement.textContent = todayCase.desc;

    // Make the button open the reporting website
    var btn = document.getElementById('tipButton');
    if (btn) {
        btn.addEventListener('click', function() {
            chrome.tabs.create({url: 'https://www.metrodenvercrimestoppers.com/'});
        });
    }
});
