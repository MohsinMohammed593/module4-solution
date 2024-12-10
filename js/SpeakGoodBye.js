(function (window) {
  var byeSpeaker = {};

  // STEP 4: Create the 'speak' function
  byeSpeaker.speak = function (name) {
    console.log("Good Bye " + name);
  };

  // STEP 5: Expose 'byeSpeaker' to the global scope
  window.byeSpeaker = byeSpeaker;
})(window);
