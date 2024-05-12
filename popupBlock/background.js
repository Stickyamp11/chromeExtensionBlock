chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
      console.log('details', details)
      if (details.url.indexOf("qayvlj") != -1) {
          return { cancel: true };
      }
      if (details.url.indexOf("sweetalert") != -1) {
        return { cancel: true };
    }
    if (details.url.indexOf("adss") != -1) {
          return { cancel: true };
      }
      if (details.url.indexOf("tabber") != -1) {
        return { cancel: true };
    }
    if (details.url.indexOf("sailthru") != -1) {
      return { cancel: true };
    }
    if (details.url.indexOf("popads") != -1) {
      return { cancel: true };
    }
    if (details.url.indexOf("brutusin-json-forms") != -1) {
      return { cancel: true };
    }
    if (details.url.indexOf("plotly.min.js") != -1) {
      return { cancel: true };
    }
    if (details.url.indexOf("wemwlv") != -1) {
      return { cancel: true };
    }
    if (details.url.indexOf("qemvrj") != -1) {
      return { cancel: true };
    }
    if (details.url.indexOf("oveoyz") != -1) {
      return { cancel: true };
    }

    if (details.url.indexOf("dnsads") != -1) {
      return { cancel: true };
    }

    if (details.url.indexOf("xupload") != -1) {
      return { cancel: true };
    }

    if (details.url.indexOf("62124") != -1) {
      return { cancel: true };
    }
    if (details.url.indexOf("app100") != -1) {
      return { cancel: true };
    }
  },
  { urls: ["*://*/*"] },
  ["blocking"]
);
