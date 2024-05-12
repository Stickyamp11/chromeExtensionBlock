//COPY THIS
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


//END COPY
function destroyPopUP(){
    console.log("stopping click listeners");
    window.addEventListener("click", function(event) {
        event.stopImmediatePropagation();
    }, true);
}

function killPlaydede(){
    console.log("killing window.open");
    window.open = null;
    console.log("wopen", window.open);
}

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

/*
for (const key in window) {
    if (typeof window[key] === 'function') {
        console.log(key); // Output function names
    }
}
*/