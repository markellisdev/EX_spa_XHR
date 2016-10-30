"use strict";

var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (showCarnivores) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "javascripts/carnivores.json");
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        var carnivoreStuff = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
        showCarnivores(carnivoreStuff);
      });
    },
    loadHerbivores: function (showHerbivores) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "javascripts/herbivores.json");
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        var herbivoreStuff = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
        showHerbivores(herbivoreStuff);
      });
    }
  };
})();