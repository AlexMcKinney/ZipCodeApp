#Zip Code Lookup Project
The user enters a zip code and clicks the **"submit"** button or presses **enter**,
and the app will look up city & state information from https://api.zippopotam.us/us/{zipcode} 
and display it on the screen.  
Just for fun, it also provides a link to Google Maps at the given location.  

##To run the project
1) Install npm if you don't have it already (see https://www.npmjs.com/get-npm)
2) Run "npm start" from the root directory of this project to build & run it.    
After it builds and starts the local demo server, it will open a tab in your 
default web browser with the app running.

##Code Architecture
This project uses the ReactJS framework, built with JavaScript/TypeScript and HTML.
This should work on any platform that support JavaScript, including all modern web browsers.  
  
The written code begins in the "App.tsx" and "App.css" files in the "src" folder.
The App component calls functions and sub-components the programmer defines in 
sub-folders.

The subfolder for this project are:
1) components: the high-level DOM elements and event handlers.
2) model: structured objects representing the data returned by the REST services used.
3) services: the REST services used to retrieve external information.

Enjoy!
