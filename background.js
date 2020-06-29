var lms_id;
var lms_pass;
chrome.storage.sync.get(['lms_id', 'lms_pass'], function (data) {
    if (data.lms_id && data.lms_pass) {
        lms_id = data.lms_id;
        lms_pass = data.lms_pass;
    }
})
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        var auth_url = "https://lms.dsu.edu.pk";
        const path = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1];
        if (lms_id && lms_pass)
            auth_url = "https://" + lms_id + ":" + lms_pass + "@lms.dsu.edu.pk";
        return { redirectUrl: `${auth_url}${path}` };
    },
    {
        urls: ["*://lms.dsu.edu.pk/*"],
        types: ['main_frame']
    },
    ["blocking"]
);

chrome.storage.onChanged.addListener(function (changes, area) {
    if (area == "sync" && "lms_id" in changes) {
        lms_id = changes.lms_id.newValue;
        lms_pass = changes.lms_pass.newValue;

    }
});
chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'lms.dsu.edu.pk' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});