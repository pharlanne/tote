/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Landing = __webpack_require__(1)
	
	window.onload = function(){
	  console.log("tote app started")
	  var landing = new Landing();
	  landing.execute();
	
	}
	


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(2);
	var Tote = __webpack_require__(3);
	var City = __webpack_require__(4)
	
	var Landing = function(){
	  this.execute = function(){
	    var box = document.getElementById('main');
	    var title = document.createElement('input');
	    var destination = document.createElement('input');
	    var createTrip = document.createElement('button');
	    var viewTrips = document.createElement('button');
	
	     box.appendChild(title);
	     box.appendChild(destination);
	     box.appendChild(createTrip);
	     box.appendChild(viewTrips);
	
	     title.placeholder = 'Enter Trip Title';
	     title.id = 'title';
	
	
	     destination.id = 'destination'
	
	     createTrip.innerText= 'Create Trip'
	     viewTrips.innerText= 'View Saved Trips'
	
	    var autocomplete = new google.maps.places.Autocomplete(destination);
	
	    createTrip.addEventListener('click', function(){
	        var map = new Map;
	        map.initMap();
	        console.log("hello")
	        console.log(document.getElementById("title"))  
	    })
	  }
	};
	
	
	module.exports = Landing;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var map;
	var infoWindow;
	var service;
	var marker;
	
	var Map = function(){
	  this.initMap = function() {
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
	}
	
	
	
	
	module.exports = Map;

/***/ },
/* 3 */
/***/ function(module, exports) {

	
	
	
	var Tote = function(title){
	  this.title = title;
	  this.cities = [];
	}
	
	Tote.prototype = {
	  addCity: function(city){
	    this.cities.push(city);
	  },
	  getCity: function(cityName){
	    var results;
	    this.cities.forEach(function(city){
	      if(city.name === cityName){
	        results = city
	      }
	    })
	    return results;
	  },
	  getCityIndex: function(cityName){
	    var city = this.getCity(cityName);
	    return this.cities.indexOf(city);
	  },
	  removeCity: function(cityName){
	    var index = this.getCityIndex(cityName);
	    this.cities.splice(index, 1);
	  }
	}
	
	
	
	
	
	
	
	
	
	module.exports = Tote;

/***/ },
/* 4 */
/***/ function(module, exports) {

	
	
	
	var City = function(params){
	  this.name = params["name"],
	  this.country = params["country"], 
	  this.location = {
	    lat: params["lat"],
	    lng: params["lng"]
	  }, 
	  this.toties = []
	}
	
	City.prototype = {
	  addTotie: function(totie){
	    this.toties.push(totie);
	  }, 
	  getTotie: function(searchQuery){
	    var result;
	    this.toties.forEach(function(totie){
	      if(totie.name.includes(searchQuery)){
	        result = totie;
	      }
	    })
	    return result;
	  }, 
	
	  getTotiesType: function(searchQuery){
	    var results = [];
	    this.toties.forEach(function(totie){
	      totie.types.forEach(function(type){
	        if(type === searchQuery){
	          results.push(totie);
	        } 
	      }.bind(this))
	    }.bind(this))
	
	    if(results.length > 0 ){
	      return results;
	    } else {
	      return null
	    }
	  },
	  getTotieIndex: function(searchQuery){
	    var totie = this.getTotie(searchQuery)
	    return this.toties.indexOf(totie)
	  },
	  removeTotie: function(searchQuery){
	    var index = this.getTotieIndex(searchQuery);
	    this.toties.splice(index,1)
	  }
	
	
	
	
	}
	
	
	module.exports = City;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map