// array of URLs to block
// const Filters = [
//     "*://*.doubleclick.net/*",
//     "*://partner.googleadservices.com/*",
//     "*://*.googlesyndication.com/*",
//     "*://*.google-analytics.com/*",
//     "*://creative.ak.fbcdn.net/*",
//     "*://*.adbrite.com/*",
//     "*://*.exponential.com/*",
//     "*://*.quantserve.com/*",
//     "*://*.scorecardresearch.com/*",
//     "*://*.zedo.com/*",
//     "*://*.doubleclick.com/*",
//     "*://*.googleadservices.com/*",
//     "*://*youtube.com/*",
//     "*://*.ytimg.com/*",
// ];


// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//         return { cancel: true };
//     },
//     { urls: Filters },
//     ["blocking"]
// );


// create a filter to block youtube completely
const youtubeFilter = {
    urls: [
        "*://*.youtube.com/*",
        "*://*.ytimg.com/*",
    ]
};

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true };
    },
    youtubeFilter,
    ["blocking"]
);