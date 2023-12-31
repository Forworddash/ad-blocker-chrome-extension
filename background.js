// First filter for YouTube-related URLs
const youtubeFilter = {
    urls: [
        "*://*.youtube.com/*",
        "*://*.ytimg.com/*",
    ]
};

// Second filter for additional URLs
const additionalFilter = {
    urls: [
        "*://*.example.com/*",
        "*://*.anotherexample.com/*",
    ]
};

// Combine both filters into a single array
const combinedFilter = [...youtubeFilter.urls, ...additionalFilter.urls];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true };
    },
    { urls: combinedFilter },
    ["blocking"]
);
