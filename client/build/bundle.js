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
	  console.log("hi")
	  
	  var landing = new Landing();
	  landing.execute();
	
	}
	


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var BasicResults = __webpack_require__(2);
	var Tote = __webpack_require__(6);
	var City = __webpack_require__(7)
	
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
	     createTrip.id = 'createTrip'
	     createTrip.innerText= 'Create Trip'
	     viewTrips.innerText= 'View Saved Trips'
	
	    var autocomplete = new google.maps.places.Autocomplete(destination);
	   
	    createTrip.addEventListener('click', function(){
	      console.log("hello")
	      var basicResultsView = new BasicResults;
	        basicResultsView.initMap();
	        // console.log("hello")
	        // console.log(document.getElementById("title"))  
	      })
	  }
	};
	
	
	module.exports = Landing;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map;
	var infoWindow;
	var service;
	var marker;
	var mapList = document.getElementById('mapList');
	var SearchView = __webpack_require__(3);
	
	var BasicTotie = __webpack_require__(4);
	var DetailedTotie = __webpack_require__(5)
	var AltDetailedTotie = __webpack_require__(8)
	var Tote = __webpack_require__(6)
	var City = __webpack_require__(7)
	var DetailedResultView = __webpack_require__(9)
	
	
	
	
	var BasicResults = function(){
	this.initMap = function() {
	
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 55.946969, lng: -3.202022},
	    zoom: 10,
	  });
	
	
	
	  // var tote = new Tote(title.value);
	  // var params = 
	  // var city = new City(params)
	
	 
	
	
	
	  infoWindow = new google.maps.InfoWindow();
	  service = new google.maps.places
	           .PlacesService(map);
	
	  ////////// adding the autocomplete functionality
	  var input = (document.getElementById('destination')); //gets the element that contains the value we want to auto complete
	  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);//moves all the controls ontop of the map and positions them in the top left corner of the map
	
	  var autocomplete = new google.maps.places.Autocomplete(input);// News up an instance of the autocomplete function from the google maps 
	       
	
	  var geocoder = new google.maps.Geocoder();
	
	  document.getElementById('destination').addEventListener('keypress', function(event){
	    if(event.keycode==13){
	    event.preventDefault();
	    geocodeAddress(geocoder, map);
	  }
	  });
	  
	    document.getElementById('createTrip').addEventListener('click', function(event){
	      event.preventDefault();
	      geocodeAddress(geocoder, map);
	    });
	  
	
	    function geocodeAddress(geocoder, resultsMap) {
	      var address = document.getElementById('destination').value;
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
	            console.log(results[0].address_components[0].long_name, results[0].address_components.slice(-1)[0].long_name, results[0].geometry.location);
	
	            var name = results[0].address_components[0].long_name;
	            var country =  results[0].address_components.slice(-1)[0].long_name;
	            var lat =  results[0].geometry.location.lat;
	            var lng = results[0].geometry.location.lng;
	            var params = {name, country, lat, lng};
	            var city = new City(params);
	
	                       
	        } 
	      }else {
	          alert('Geocode was not successful for the following reason: ' + status);
	        }
	
	      });
	    }
	
	      var hotels = document.createElement('img');
	      var bars = document.createElement('img');
	      var restaurants = document.createElement('img');
	      var landmarks = document.createElement('img');
	      var events = document.createElement('img');
	      var shopping = document.createElement('img')
	      var paste = document.getElementById('icons')
	      paste.innerHTML = "";
	
	     
	
	      paste.appendChild(hotels);
	      paste.appendChild(bars);
	      paste.appendChild(restaurants);
	      paste.appendChild(landmarks);
	      paste.appendChild(events);
	      paste.appendChild(shopping)
	
	      hotels.src ='./png/hotel.png';
	      bars.src = './png/bar.png';
	      restaurants.src ='./png/restaurant.png';
	      landmarks.src = './png/see.png';
	      events.src = './png/event.png';
	      shopping.src = './png/shopping.png'
	
	      hotels.addEventListener('click',function(){
	        performSearch('hotel');
	      });
	      bars.addEventListener('click',function(){
	        performSearch('bar');
	      });
	      restaurants.addEventListener('click',function(){
	        performSearch('restaurant');
	      });
	      landmarks.addEventListener('click',function(){
	        performSearch('landmark');
	      });
	      events.addEventListener('click',function(){
	        performSearch('event');
	      });
	      shopping.addEventListener('click',function(){
	        performSearch('shop');
	      });
	
	
	
	
	  function performSearch(category) {
	    var request = {
	      location: map.getCenter(),
	      // bounds: map.getBounds(),
	      keyword: category,
	      radius: 1000,
	      // type: [category]
	    };
	    
	    service.nearbySearch(request, callback);
	
	  }
	
	
	  function callback(results, status) {
	    if (status !== google.maps.places.PlacesServiceStatus.OK) {
	      console.error(status);
	      return;
	    }
	
	    displayMap = document.getElementById('mapList')
	    displayMap.innerHTML = "";
	    for (var i = 0, result; result = results[i]; i++) {
	      var basicTotie = new BasicTotie(result.name, result.geometry.location.lat(), result.geometry.location.lng(), result.place_id, result.price_level, result.rating, result.types)
	      console.log(basicTotie)
	
	      // var detailedResultView = new DetailedResultView(basicTotie, map);
	      // detailedResultView.getPlaceDetails();
	      // console.log(detailedResultView.placeDetails)
	      // detailedResultView.createDetailedTotie(DetailedTotie);
	      // console.log(detailedResultView.detailedTotie)
	
	      listResult(result, displayMap);
	      if(i===9) {break};
	
	    }
	  }
	
	
	    function listResult(place, displayMap){
	    service.getDetails(place, function(result, status) {
	      if (status !== google.maps.places.PlacesServiceStatus.OK) {
	        console.error(status);
	        return;
	      }
	      
	      var params = {
	        name: result.name,
	        lat: result.geometry.location.lat(),
	        lng: result.geometry.location.lng(),
	        address: result.formatted_address,
	        phoneNumber: result.formatted_phone_number,
	        placeId: result.place_id,
	        rating: result.rating,
	        reviews: result.reviews,
	        types: result.types, 
	        website: result.website
	      }
	
	
	      
	      var detailedResultView = new DetailedResultView(map);
	      detailedResultView.initiateTotieConstruction(DetailedTotie, AltDetailedTotie, params, result)
	      
	      console.log(detailedResultView.detailedTotie)
	          
	
	
	      var ul = document.createElement('ul'); 
	      var li = document.createElement('li');
	      var photoUrl = result.photos[0].getUrl({'maxWidth': 35, 'maxHeight' : 35});
	      var image = document.createElement('img')
	      image.src = photoUrl
	      li.innerText = result.name + " " + result.rating ;
	      // console.log(result)
	      displayMap.appendChild(ul);
	      ul.appendChild(li);
	      li.appendChild(image)
	
	    })
	    }
	
	  function addMarker(place) {
	    var marker = new google.maps.Marker({
	      map: map,
	      position: place.geometry.location,
	      icon: {
	        url: 'http://maps.gstatic.com/mapfiles/circle.png',
	        anchor: new google.maps.Point(10, 10),
	        scaledSize: new google.maps.Size(10, 17)
	      }
	    });
	
	    google.maps.event.addListener(marker, 'click', function() {
	      service.getDetails(place, function(result, status) {
	        if (status !== google.maps.places.PlacesServiceStatus.OK) {
	          console.error(status);
	          return;
	        }
	
	
	        infoWindow.setContent(result.name + result.formatted_address + ", " + 'rating: ' + result.rating);
	
	        infoWindow.open(map, marker);
	      });
	    });
	  }
	}
	}
	//news up the elements for the icon menus
	
	
	
	
	module.exports = BasicResults;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var SearchViews = function(map){
	this.map = map
	this.execute = function(){
	console.log("reached here")
	    
	}
	}
	
	
	
	module.exports = SearchViews;

/***/ },
/* 4 */
/***/ function(module, exports) {

	
	
	
	var BasicTotie = function(name, lat, lng, placeId, priceLevel, rating, types ){
	  this.name = name, 
	  this.location = {
	    lat: lat,
	    lng: lng
	  },
	  this.placeId = placeId,
	  this.priceLevel = priceLevel,
	  this.rating = rating, 
	  this.types = types
	}
	
	module.exports = BasicTotie;

/***/ },
/* 5 */
/***/ function(module, exports) {

	
	
	
	var DetailedTotie = function(name, lat, lng, address, phoneNumber, placeId, openingHours, priceLevel, rating, reviews, types, website){
	  this.name = name, 
	  this.location = {
	    lat: lat, 
	    lng: lng
	  }, 
	  this.address = address, 
	  this.phoneNumber = phoneNumber,
	  this.placeId = placeId, 
	  this.allOpeningHours = openingHours,
	  this.priceLevel = priceLevel,
	  this.rating = rating,
	  this.reviews = reviews, 
	  this.types = types,
	  this.website = website,
	  this.comments = []
	
	}
	
	DetailedTotie.prototype = {
	  getOpeningHours: function(day){
	    var result = [];
	    this.allOpeningHours.forEach(function(dayOpeningHours){
	      if (dayOpeningHours.includes(day)){
	        result.push(dayOpeningHours)
	      }
	    })
	  return result
	  },
	  getAllReviewsText: function(){
	    var result = [];
	    for (review of this.reviews){
	      result.push(review.text);
	    }
	    return result;
	  },
	  getAllReviewsRating: function(){
	    var result = [];
	    for (var i = 0; i < this.reviews.length; i++){
	      result.push(this.reviews[i].rating)
	    };
	    return result;
	  },
	  addComment: function(input){
	    var comment = {
	      id: this.comments.length + 1, 
	      text: input
	    };
	    this.comments.push(comment);
	  },
	  getAllComments: function(){
	    var result = [];
	    this.comments.forEach(function(commentObject){
	      result.push(commentObject.text)
	    })
	    return result;
	  }, 
	  getComment: function(inputtedId){
	    var result = [];
	    this.comments.forEach(function(commentObject){
	      if(commentObject.id === Number(inputtedId)){
	        result.push(commentObject);
	      };
	    });
	    return result[0].text;
	  }, 
	  updateComment: function(inputtedId, newText){
	    this.comments.forEach(function(commentObject){
	      if(commentObject.id === Number(inputtedId)){
	        commentObject.text = newText;
	      };
	    });
	  }, 
	  getCommentIndex: function(inputtedId){
	    var result;
	    this.comments.forEach(function(commentObject){
	      if(commentObject.id === Number(inputtedId)){
	        result = this.comments.indexOf(commentObject);
	      }
	    }.bind(this));
	    return result;
	  },
	  removeComment: function(inputtedId){
	    var index = this.getCommentIndex(inputtedId);
	    this.comments.splice(index, 1);
	  }
	
	}
	
	
	
	
	module.exports = DetailedTotie;

/***/ },
/* 6 */
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
/* 7 */
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

/***/ },
/* 8 */
/***/ function(module, exports) {

	
	
	
	var AltDetailedTotie = function(params){
	  this.name = params["name"],
	  this.location = {
	    lat: params["lat"], 
	    lng: params["lng"]
	  },
	  this.address = params["address"],
	  this.phoneNumber = params["phoneNumber"],
	  this.placeId = params["placeId"],
	  this.rating = params["rating"],
	  this.reviews = params["reviews"],
	  this.types = params["types"],
	  this.website = params["website"], 
	  this.comments = []
	
	}
	
	AltDetailedTotie.prototype = {
	  getAllReviewsText: function(){
	    var results = [];
	    this.reviews.forEach(function(review){
	      results.push(review.text);
	    });
	    return results;
	  },
	  getAllReviewsRating: function(){
	    var results = [];
	    this.reviews.forEach(function(review){
	      results.push(review.rating);
	    })
	    return results;
	  },
	  getComments: function(){
	    var results = [];
	    this.comments.forEach(function(comment){
	      results.push(comment);
	    });
	    return results;
	  },
	  addComment: function(userInput){
	    this.comments.push(userInput.toString());
	  }, 
	  getCommentIndex: function(commentText){
	    var result = null;
	    this.comments.forEach(function(comment){
	      if(comment === commentText){
	        var index = this.comments.indexOf(comment);
	        result = index;
	      }
	    }.bind(this))
	    return result;
	  }, 
	  removeComment: function(commentText){
	    var index = this.getCommentIndex(commentText);
	    this.comments.splice(index, 1);
	  }
	
	 
	}
	
	
	
	
	
	
	module.exports = AltDetailedTotie;

/***/ },
/* 9 */
/***/ function(module, exports) {

	
	
	
	var DetailedResultView = function(map){
	  this.element = document.createElement("div")
	  // this.basicTotie = basicTotie;
	  this.map = map;
	  this.placeDetails = null;
	  this.detailedTotie = null;
	  // this.altDetailedTotie = null;
	  this.service = new google.maps.places.PlacesService(document.createElement("div"))
	}
	
	DetailedResultView.prototype = {
	  createPlaceRequest: function(){
	    var request = {
	      placeId: this.basicTotie.placeId
	    }
	    return request;
	  }, 
	  getPlaceDetails: function(){
	    // console.log()
	    var placeResult;
	    this.service.getDetails(this.createPlaceRequest(), function(status, result){
	      if (status !== google.maps.places.PlacesServiceStatus.OK) {
	        console.error(status);
	        return;
	      }
	      this.placeResult = result;
	    })
	    
	  },
	  createDetailedTotie: function(googleObject, detailedTotieConstrFunc){
	    // var result = this.getPlaceDetails();
	    // console.log(result)
	    var detailedTotie = new detailedTotieConstrFunc(googleObject.name, googleObject.geometry.location.lat(), googleObject.geometry.location.lng(), googleObject.formatted_address, googleObject.formatted_phone_number, googleObject.place_id, googleObject.opening_hours.weekday_text, googleObject.price_level, googleObject.rating, googleObject.reviews, googleObject.types, googleObject.website);
	    this.detailedTotie = detailedTotie;
	  }, 
	  createAltDetailedTotie: function(params, altDetailedTotieConstrFunc){
	    var altDetailedTotie = new altDetailedTotieConstrFunc(params);
	    this.detailedTotie = altDetailedTotie;
	  }, 
	  filterGoogleResult: function(object){
	    var result;
	    if(object.opening_hours === undefined){
	      result = false;
	    } else {
	      result = true;
	    }
	   return result;
	  }, 
	  initiateTotieConstruction: function(detailedTotieConstrFunc, altDetailedTotieConstrFunc, params, object){
	    if(this.filterGoogleResult(object) === true){
	      this.createDetailedTotie(object, detailedTotieConstrFunc);
	    } else if (this.filterGoogleResult(object) === false){
	      this.createAltDetailedTotie(params, altDetailedTotieConstrFunc);
	    }
	  }
	}
	
	
	
	
	
	module.exports = DetailedResultView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map