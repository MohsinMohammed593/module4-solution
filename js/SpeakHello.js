(function (window) {
  var helloSpeaker = {};

  // STEP 2: Create the 'speak' function
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };

  // STEP 3: Expose 'helloSpeaker' to the global scope
  window.helloSpeaker = helloSpeaker;
})(window);
