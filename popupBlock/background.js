// background.js

// Listener for webRequest to intercept and block requests
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // Check if request URL contains the blocked domain
      blockSuspiciousUrl(details,"qayvlj?d=0");
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );


function blockSuspiciousUrl(details,url){
  console.log(details.url, "details");
    if (details.url.includes(url)) {
        // Block the request by returning {cancel: true}
        return { cancel: true };
      }
}

/*var sitesArray = {
    "qayvlj?d=0": "qayvlj?d=0"
}

    function isRequestCancelled(sitesArray, url){
      return sitesArray.includes(url);
    }
  
    function blockListener (details) {
       var sitesArray = Object.keys(items['sitesToBeBlocked']);
       return { cancel: isRequestCancelled(sitesArray, details.url ) };
    }
    chrome.webRequest.onBeforeRequest.addListener( blockListener ,{ urls: [" <all_urls>"], types: [ 'main_frame' ] }, ['blocking'] ); */
