// Function to modify JavaScript variable
function modifyVariable() {
    killPlaydede();
    destroyPopUP();
  }

function destroyPopUP(){
    console.log("stopping click listeners");
    window.addEventListener("click", function(event) {
        event.stopImmediatePropagation();
    }, true);
}

function killGamovideo(){
    window.open = null;
}

function killPlaydede(){
    console.log("killing window.open");
    window.open = null;
    console.log("wopen", window.open);
}
  
  // Listen for page load
  window.addEventListener('load', () => {
    // Execute the modification function
    console.log("executing magic");
    modifyVariable();
    nullifyFunctions();
  });

  function nullifyFunctions() {
    // Loop through all properties of the window object to find the function
    for (const prop in window) {
      if (typeof window[prop] === 'function' && prop.includes('popup')) {
        window[prop] = null;
        console.log(`Function popup nullified.`);
      }
      if (typeof window[prop] === 'function' && prop.includes('winopen')) {
        window[prop] = null;
        console.log(`Function winopen nullified.`);
      }
    }
  }

  /*function modifyJavaScriptBeforeLoad(content) {
    // Remove debugger statements
    let modifiedScript = content.replace(/debugger;/g, '');
    return modifiedScript;
  }*/
  
  // Intercept and modify JavaScript files before execution
  /*function interceptAndModify(requestDetails) {
    if (requestDetails.responseType === 'script' && requestDetails.type === 'script') {
      fetch(requestDetails.url)
        .then(response => response.text())
        .then(text => {
          nullifyFunctions();
          const modifiedText = modifyJavaScriptBeforeLoad(text);
          const blob = new Blob([modifiedText], { type: 'application/javascript' });
          const modifiedURL = URL.createObjectURL(blob);
          return { redirectUrl: modifiedURL };
        })
        .catch(error => {
          console.error('Error modifying script:', error);
        });
    }
  }*/
  
  // Intercept requests to modify JavaScript files
  /*chrome.webRequest.onBeforeRequest.addListener(
    interceptAndModify,
    { urls: ['<all_urls>'], types: ['script'] },
    ['blocking']
  );*/