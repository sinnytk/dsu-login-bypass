chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        const path = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1];
        let auth_url = chrome.storage.sync.get(['lms_id', 'lms_password'], function (data) {
            let url = "https://" + lms_id + ":" + lms_password + "@lms.dsu.edu.pk"
            return url
        })
        return { redirectUrl: `${auth_url}${path}` };
    },
    {
        urls: ["*://lms.dsu.edu.pk.com/*"],
        types: ['main_frame']
    },
    ["blocking"]
);