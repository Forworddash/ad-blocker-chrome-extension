// array of URLs to block
const Filters = [
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
    "*://*.googleadservices.com/*"
];

const AdvertisingFilter = [
    "*://*youtube.com/*"
];

const AllFilters = [...Filters, ...AdvertisingFilter];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true };
    },
    { urls: AllFilters },
    ["blocking"]
);
