// First filter for common ad URLs
const filterOne = {
    urls: [
        // "*://*.youtube.com/*",
        // "*://*.ytimg.com/*",
        "*://*.doubleclick.net/*",
        "*://partner.googleadservices.com/*",
        "*://*.googlesyndication.com/*",
        "*://*.google-analytics.com/*",
        "*://creative.ak.fbcdn.net/*",
        "*://*.adbrite.com/*",
        "*://*.exponential.com/*",
        "*://*.quantserve.com/*",
        "*://*.scorecardresearch.com/*",
        "*://*.zedo.com/*",
        "*://*.doubleclick.com/*",
        "*://*.googleadservices.com/*",
    ]
};

// Second filter for additional URLs
const filterTwo = {
    urls: [
        "*://*.example.com/*",
        "*://*.anotherexample.com/*",
    ]
};

// Combine both filters into a single array, if more filter arrays are created, add them to the combinedFilter array
const combinedFilter = [...filterOne.urls, ...filterTwo.urls];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true };
    },
    { urls: combinedFilter },
    ["blocking"]
);