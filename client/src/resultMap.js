var map;
var infoWindow;
var service;
var marker;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.946969, lng: -3.202022},
    zoom: 10,
    styles: [{
      stylers: [{ visibility: 'simplified' }]
    }, {
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }]
  });

  infoWindow = new google.maps.InfoWindow();
  service = new google.maps.places
           .PlacesService(document.getElementById('mapList')
                          .appendChild(document.createElement('div')));

  ////////// adding the autocomplete functionality
  var input = (document.getElementById('autoCity')); //gets the element that contains the value we want to auto complete
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);//moves all the controls ontop of the map and positions them in the top left corner of the map

  var autocomplete = new google.maps.places.Autocomplete(input);// News up an instance of the autocomplete function from the google maps 
         

  var geocoder = new google.maps.Geocoder();
    function geocodeAddress(geocoder, resultsMap) {
      var address = document.getElementById('autoCity').value;
      geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          resultsMap.setCenter(results[0].geometry.location);
            if (marker) { // this is waht moves the marker each time marker var set in global
                marker.setPosition(results[0].geometry.location); //if exists take the position and move it else
            }else{

            marker = new google.maps.Marker({ //create a new marker which is what happens in the first instance.
            map: resultsMap,
            position: results[0].geometry.location,
            
          });
        } 
      }else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }

//the below code adds an event listener to the 'Enter' key. It grabs the input 'autoCity' and attaches an event listener to it; the listener is a 'key press', when the keypress happens on the 'enter key' which has a default number of 13 this fires off a function - which geociode address function above and placesa a marker on the map. 
    document.getElementById('autoCity').addEventListener('keypress', function(e) {
      if(e.keyCode == 13){
      geocodeAddress(geocoder, map)};
    });

  // map.addListener('idle', performSearch);
  // performSearch()
}

// function performSearch() {
//   var request = {
//     location: {lat: 55.946969, lng: -3.202022},
//     // bounds: map.getBounds(),
//     keyword: 'bar',
//     radius: 50000
//   };
//   service.radarSearch(request, callback);
// }


// function callback(results, status) {
//   if (status !== google.maps.places.PlacesServiceStatus.OK) {
//     console.error(status);
//     return;
//   }
//   for (var i = 0, result; result = results[i]; i++) {
//     listResult(result);
//   }
// }


//   function listResult(place){
//   service.getDetails(place, function(result, status) {
//     if (status !== google.maps.places.PlacesServiceStatus.OK) {
//     console.error(status);
//             return;
//           }
         
//     var displayMap = document.getElementById('mapList')
//     var ul = document.createElement('ul'); 
//     var li = document.createElement('li');
//     li.innerText = result.name + " " + result.rating + " ";
//     console.log(result)

//     var photoUrl = result.photos[0].getUrl({'maxWidth': 35, 'maxHeight' : 35});
//     var image = document.createElement('img')
//     image.src = photoUrl

//     displayMap.appendChild(ul);
//     ul.appendChild(li);
//     li.appendChild(image)

//   })

//   }

// function addMarker(place) {
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location,
//     icon: {
//       url: 'http://maps.gstatic.com/mapfiles/circle.png',
//       anchor: new google.maps.Point(10, 10),
//       scaledSize: new google.maps.Size(10, 17)
//     }
//   });

//   google.maps.event.addListener(marker, 'click', function() {
//     service.getDetails(place, function(result, status) {
//       if (status !== google.maps.places.PlacesServiceStatus.OK) {
//         console.error(status);
//         return;
//       }


//       infoWindow.setContent(result.name + result.formatted_address + ", " + 'rating: ' + result.rating);

//       infoWindow.open(map, marker);
//     });
//   });
// }
