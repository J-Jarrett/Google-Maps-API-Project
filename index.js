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
// 7. Add multiple markers to map
// 8. Customize marker Icons for certain Markers (avoid "undefined" icons)
// 9. Customize infoWindow for each marker - diff content
// 10. Eliminate individual function calls for each marker: array, database
// 11. Last tweak: user can click anywhere on the map to add a standard marker, i.e. no iconImage or content

// ======================================================================

// 1. Assign var map, create initMap function and pass in location and content options:
// 3. variable map object is created by calling a new google.maps.Map object, and passing in the location in the DOM to place it, then an object of some options, ie. where to center and what zoom. 


  let map;

  function initMap() {
    let options = { 
      center: { lat: -34.9285, lng: 138.6007 }, // Adelaide SA 
      zoom: 10
    }
    map = new google.maps.Map(document.getElementById("map"), options);

    // 11. Last tweak: user can click anywhere on the map to add a standard marker, i.e. no iconImage or content
 
    google.maps.event.addListener(map, "click", function(event) {
      addMarker({coords: event.latLng});
    })
    
    // 4. Add a marker to our map. (within initMap)
    // 5. Add a Custom marker to our map (also within initMap)
    // 6. Add an Info Window - a little pop up with some content.
    // 8. Customize marker Icons for certain Markers (avoid "undefined" icons)

    // // 7. Multiple Markers section
    // 10. Eliminate individual function calls for each marker: array, database
    // Array of markers:
    const markers = [
      { coords: {lat: -34.9285, lng: 138.6007},
        content: '<h3>Adelaide</h3>' },
      { coords: { lat: -34.9804, lng: 138.5131 },
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content: '<h3>Glenelg</h3>' },
      { coords: { lat: -35.1488, lng: 138.4703 },
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content: '<h3>Port Noarlunga</h3>' },
      { coords: { lat: -34.8389, lng: 138.4839 },
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content: '<h3>Semaphore</h3>' }
    ];

    // Next, loop through this array of markers to call addMarker():
    for (let i = 0; i<markers.length; i++) {
      // add current iteration of marker and call function:
      addMarker(markers[i]);
    }


    // a. create addMarker function
    function addMarker(props) {
      const marker = new google.maps.Marker({
      position: props.coords,
      map: map
      // icon: props.iconImage
      });

        // 8. Customize marker Icons for certain Markers (avoid "undefined" icons)
      // test for iconImage parameter:
      if (props.iconImage) {
        // set icon image 
        marker.setIcon(props.iconImage);
      }
      
    // // 6. Add an Info Window - a little pop up with some content.
      // 9. Customize infoWindow for each marker - diff content

      // test for "content" property on object passed:
      if (props.content) {
        let infoWindow = new google.maps.InfoWindow({
          content: props.content
        });
        marker.addListener("click", function(){
          infoWindow.open(map, marker);
        })
      }

    }

} // end of initMap()

