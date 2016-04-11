var assert = require('chai').assert;
var BasicTotie = require('../basic_totie.js');


var basicPlaceResult = {
  geometry: {
    location: {
      lat: 39,
      lng: 87
    }
  }, 
  name: "Wetherspoons", 
  placeId: "1234", 
  rating: 3, 
  types: ["night_club"], 
  vicinity: "20 Princes Street, Edinburgh"
}

var basicPlaceResultTwo = {
  geometry: {
    location: {
      lat: 39,
      lng: 87
    }
  }, 
  name: "Wetherspoons", 
  placeId: "1234", 
  price_level: 2,
  rating: 3, 
  types: ["night_club", "bar"], 
  vicinity: "20 Princes Street, Edinburgh"
}

var basicTotie = new BasicTotie(basicPlaceResult.name, basicPlaceResult.geometry.location.lat, basicPlaceResult.geometry.location.lng, basicPlaceResult.placeId, basicPlaceResult.price_level, basicPlaceResult.rating, basicPlaceResult.types);

var basicTotieTwo = new BasicTotie(basicPlaceResultTwo.name, basicPlaceResultTwo.geometry.location.lat, basicPlaceResultTwo.geometry.location.lng, basicPlaceResultTwo.placeId, basicPlaceResultTwo.price_level, basicPlaceResultTwo.rating, basicPlaceResultTwo.types);

describe("totie", function(){
  it("should store a name", function(){
    assert.equal("Wetherspoons", basicTotie.name);
  });

  it("should store a latitude and longitude as an object", function(){
    assert.deepEqual({lat:39, lng:87}, basicTotie.location);
  });

  it("should store a place id", function(){
    assert.equal("1234", basicTotie.placeId);
  });

  it("should store a rating", function(){
    assert.equal(3, basicTotie.rating);
  });

  it("should store types as an array", function(){
    assert.deepEqual(["night_club"], basicTotie.types);
  });

  it("should be able to store multiple types", function(){
    assert.deepEqual(["night_club", "bar"], basicTotieTwo.types);
  });

  it("should return undefined if price level is not present", function(){
    assert.equal(undefined, basicTotie.price_level)
  })



})