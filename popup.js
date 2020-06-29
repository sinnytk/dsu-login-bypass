document.addEventListener('DOMContentLoaded', initializeUserPass, false);

function login(id, pass) {
    if (id.value != null || pass.value != null) {
        chrome.storage.sync.set({ lms_id: id.value, lms_pass: pass.value })
        document.getElementById('logged_in').style.display = "block";
        document.getElementById('login').style.display = "none";
    }
}
function reset() {
    chrome.storage.sync.remove(['lms_id', 'lms_pass'], function () {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    })
    document.getElementById('logged_in').style.display = "none";
    document.getElementById('login').style.display = "block";
}
function initializeUserPass() {

    chrome.storage.sync.get(['lms_id', 'lms_pass'], function (data) {
        if (data.lms_id) {
            document.getElementById('logged_in').style.display = "block";
            document.getElementById('login').style.display = "none";
            document.getElementById('lms_id').innerHTML = data.lms_id;
        } else {
            console.log('Not logged in')
        }
    });
    document.getElementById('submit_btn').addEventListener('click',
        function () {
            login(document.getElementById('lms_id'), document.getElementById('lms_pass'));
        });
    document.getElementById('reset_btn').addEventListener('click',
        function () {
            reset();
        });
    // you can add listeners for other objects ( like other buttons ) here 
}