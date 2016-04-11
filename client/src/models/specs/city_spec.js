var assert = require('chai').assert;
var City = require('../city.js');


var cityGoogleObject = {
  address_components: [
  {short_name: "New York", long_name: "New York"}, 
  {short_name: "USA", long_name: "United States of America"}
  ],
  geometry: {
    location:{
      lat: 40.7142700, 
      lng: -74.0059700
    }
  }
}




var cityOne = new City(cityGoogleObject.address_components[0].long_name);



describe("city", function(){
  it("should have a name", function(){
    assert.equal("New York", cityOne.name)
  })





})