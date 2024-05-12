/*function injectScript(file_path, tag) {
  console.log("alo");
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file_path);
  console.log(script);
  node.appendChild(script);
  console.log(node);
}

document.addEventListener('DOMContentLoaded', function() {
  // Inject script after DOM is fully loaded
  injectScript(chrome.runtime.getUrl('sendScriptToTab.js'));
});

chrome.tabs.executeScript(tab.ib, {
  file: 'sendScriptToTab.js'
});*/
console.log("aaaaaa");
/*document.addEventListener('click', function() {
  console.log("olaaaa")
var s = document.createElement('script');
var scriptpath = chrome.extension.getURL('sendScriptToTab.js');
console.log(scriptpath,'owo');
s.src = scriptpath;
s.onload = function() {
  console.log("aloaaaaaaaaahhhhhhh");
};
(document.head || document.documentElement).appendChild(s);
});*/

// Define your JavaScript code as a string
var scriptCode = `
console.log("loaded...");
function modifyVariable() {
  killGamovideo();
  killStreamWish();
  }

  function killGamovideo(){
    removeGlobalFunction("doOpen")
    removeGlobalFunction("doOpen1")
  }

  function killStreamWish(){
    removeGlobalFunction("WinOpen")
  }

  function removeGlobalFunction(funcName) {
    // Check if the function exists in the global scope (window object)
    if (typeof window[funcName] === 'function') {
        // Remove the function by setting it to undefined
        window[funcName] = undefined;
        console.log("not found");
    } else {
        console.log("removed");
    }
}

modifyVariable();
`;

// Create a <script> element
var scriptElement = document.createElement('script');

// Set the content of the <script> element to your JavaScript code
scriptElement.textContent = scriptCode;

// Append the <script> element to the <body> or any other target element in the DOM
document.body.appendChild(scriptElement);

//chrome-extension://eaggggdjnidihnoolhigceejmeegkaam/sendScriptToTab.js