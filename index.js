/* 
This is from my Traversy notes, project 19 Google Maps API Project, originally written in 2017.
The Google API has changed since then, and we're now looking at using Google Cloud; I just wanted to follow what was originally written and look at updating it later.
So: understand first, then check the changes.
*/

// In Traversy, this script was within index.html; here it has been separated to index.js. In the <head> section of html see lines 8-11 calling for the Google APIs script, using our API key, script is deferred.

// 1. initialize map; then call function initMap
// 2. make sure css div #map has a height value, or can't see it (all divs automatically 0 in height)
// 3. variable map object is created by calling a new google.maps.Map object, and passing in the location in the DOM to place it, then an object of some options, ie. where to center and what zoom. 
//    Brad prefers to extract these options to a var and pass this in instead.
// 4. Add a marker to our map. (within initMap)
// 5. Add a Custom marker to our map (also within initMap)
// 6. Add an Info Window - a little pop up with some content.



// ======================================================================

// 1. Assign var map, create initMap function and pass in location and content options:

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// 2. make sure #map has a height value in css or you won't see anything.

// 3. rewrite initMap() so options are separate from initializing new object:
let map;

function initMap() {
  let options = { 
    center: { lat: -34.9285, lng: 138.6007 }, // Adelaide SA 
    zoom: 10
  }
  map = new google.maps.Map(document.getElementById("map"), options);
    // coords of Adelaide are 34.9285 S, 138.6007 E. below equator must use - (minus); for Boston coords which were lng W, Brad had to use minus there too.
    // zoom levels: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings

  // 4. Add a marker to our map. (within initMap)
  // const marker = new google.maps.Marker({
  //   position: options.center,   // could use {lat:..., lng:...} here
  //   map: map,
  // });
    // can add more later but this is a good start.
  
  // 5. Add a Custom marker to our map (also within initMap)
  const marker = new google.maps.Marker({
    position: options.center, 
    map: map,
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  });
    // Notes on custom markers: see docs, "https://developers.google.com/maps/documentation/javascript/custom-markers" for the path to images for use on maps. Docs suggest creating an object library using a few of these images, then pulling them in to the code with a for loop.
    // ICONS are now different; see docs on pulling them into file using GitHub or dist/js etc.
    // "https://developers.google.com/maps/documentation/javascript/examples/full/images/" -- now gives 404 (28/11/21)

  // 6. Add an Info Window - a little pop up with some content.
  // base code: 
  // const infoWindow = new google.maps.InfoWindow({})
  // takes in content (html), needs an event listener (e.g."click"), 
  // then a function containing method infoWindow.open() which takes in map and marker variables.
  const infoWindow = new google.maps.InfoWindow({
    content: '<h1>Adelaide</h1>'
  });
  marker.addListener("click", function(){
    infoWindow.open(map, marker);
  })



} // end of initMap()

  
    


