var map;
var infoWindow;
var service;
var marker;
var mapList = document.getElementById('mapList');
var SearchView = require('./search_views.js');

var BasicTotie = require('../models/basic_totie.js');
var DetailedTotie = require('../models/detailed_totie.js')
var AltDetailedTotie = require('../models/alt_detailed_totie.js')
var Tote = require('../models/tote.js')
var City = require('../models/city.js')
var DetailedResultView = require('./detailed_results_view.js')




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