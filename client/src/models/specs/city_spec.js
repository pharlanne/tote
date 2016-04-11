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

params = {
  "name": cityGoogleObject.address_components[0].long_name,
  "country": cityGoogleObject.address_components[1].long_name,
  "lat": cityGoogleObject.geometry.location.lat, 
  "lng": cityGoogleObject.geometry.location.lng
}

var cityOne = new City( params );

describe("city", function(){
  it("should have a name", function(){
    assert.equal("New York", cityOne.name)
  })

  it("should have a country", function(){
    assert.equal("United States of America", cityOne.country)
  })

  it("should have a location as an object", function(){
    assert.deepEqual({lat: 40.7142700, lng: -74.0059700 }, cityOne.location)
  })


})