function printHello() {
  // This functions simply prints hello world
  console.log("Hello World");
}

function runCallbackFunction(callbackFunction) {
  // This method would simply run the callback method
  callbackFunction();
}

runCallbackFunction(printHello);
