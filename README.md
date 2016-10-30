# EX_spa_XHR

IIFE, XHRs and Callbacks, Oh My

Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

mkdir -p ~/workspace/exercises/spa/iife-xhr && cd $_
touch index.html
touch iife-xhr.js
touch Predator.js
Instructions

Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.
Create an IIFE with the name of Predator.
Predator should have two private arrays to store carnivores and herbivores.
Predator should expose two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded to then display those animals in your DOM. Example given below.
In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.