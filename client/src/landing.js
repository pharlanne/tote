var Map = require('./resultMap.js');
var Tote = require('./models/tote.js');
var City = require('./models/city.js')

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