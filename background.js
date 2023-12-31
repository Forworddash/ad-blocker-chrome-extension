// First filter for YouTube-related URLs
const filterOne = {
    urls: [
        "*://*.youtube.com/*",
        "*://*.ytimg.com/*",
    ]
};

// Second filter for additional URLs
const filterTwo = {
    urls: [
        "*://*.example.com/*",
        "*://*.anotherexample.com/*",
    ]
};

// Combine both filters into a single array
const combinedFilter = [...filterOne.urls, ...filterTwo.urls];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true };
    },
    { urls: combinedFilter },
    ["blocking"]
);
