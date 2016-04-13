var assert = require('chai').assert;
var AltDetailedTotie = require('../alt_detailed_totie.js');



var detailedPlaceResult = {
  formatted_address: "20 Princes Street, Edinburgh EH1 1HT, United Kingdom",
  formatted_phone_number: "0131 4431212",
  geometry: {
    location: {
      lat: 39, 
      lng: 87
    }
  }, 
  name: "Wetherspoons", 
  opening_hours: {
    weekday_text: [
      "Monday: 11:00 AM - 1:00 AM", 
      "Tuesday: 11:00 AM - 1:00 AM", 
      "Wednesday: 11:00 AM - 1:00 AM", 
      "Thursday: 11:00 AM - 1:00 AM", 
      "Friday: 11:00 AM - 1:00 AM", 
      "Saturday: 11:00 AM - 1:00 AM", 
      "Sunday: 11:00 AM - 1:00 AM", 
    ]
  }, 
  place_id:  "1234", 
  rating: 3.5, 
  reviews: [
    {
      rating: 3, 
      text: "Very good"
    }, 
    {
      rating: 3.5,
      text: "Decent"
    }
  ],
  types: ["restaurant", "bar", "food"],
  website: "https://www.jdwetherspoon.com/pubs/all-pubs/scotland/edinburgh/the-standing-order-edinburgh",
}

var detailedPlaceResult2 = {
  formatted_address: "20 Princes Street, Edinburgh EH1 1HT, United Kingdom",
  formatted_phone_number: "0131 4431212",
  geometry: {
    location: {
      lat: 39, 
      lng: 87
    }
  }, 
  name: "Wetherspoons", 
  opening_hours: {
    weekday_text: [
      "Monday: 11:00 AM - 1:00 AM", 
      "Tuesday: 11:00 AM - 1:00 AM", 
      "Wednesday: 11:00 AM - 1:00 AM", 
      "Thursday: 11:00 AM - 1:00 AM", 
      "Friday: 11:00 AM - 1:00 AM", 
      "Saturday: 11:00 AM - 1:00 AM", 
      "Sunday: 11:00 AM - 1:00 AM", 
    ]
  }, 
  place_id:  "1234", 
  types: ["restaurant", "bar", "food"],
  website: "https://www.jdwetherspoon.com/pubs/all-pubs/scotland/edinburgh/the-standing-order-edinburgh",
}


var params = {
  name: detailedPlaceResult.name,
  lat: detailedPlaceResult.geometry.location.lat,
  lng: detailedPlaceResult.geometry.location.lng,
  address: detailedPlaceResult.formatted_address,
  phoneNumber: detailedPlaceResult.formatted_phone_number,
  placeId: detailedPlaceResult.place_id,
  rating: detailedPlaceResult.rating,
  reviews: detailedPlaceResult.reviews
}

var params2 = {
  name: detailedPlaceResult.name,
  lat: detailedPlaceResult.geometry.location.lat,
  lng: detailedPlaceResult.geometry.location.lng,
  address: detailedPlaceResult.formatted_address,
  phoneNumber: detailedPlaceResult.formatted_phone_number,
  placeId: detailedPlaceResult.place_id,
  rating: detailedPlaceResult2.rating,
  reviews: detailedPlaceResult2.reviews
}

var altDetailedTotie1 = new AltDetailedTotie(params)
var altDetailedTotie2 = new AltDetailedTotie(params2)


describe("alternate detailed totie", function(){
  it("should take in a name from a params object", function(){
    assert.equal("Wetherspoons", altDetailedTotie1.name);
  });

  it("should take in a latitude and longitude and create a location property", function(){
    assert.deepEqual({lat:39, lng:87}, altDetailedTotie1.location);
  });

  it("should have an address property", function(){
    assert.equal("20 Princes Street, Edinburgh EH1 1HT, United Kingdom", altDetailedTotie1.address);
  });

  it("should have a phone number property", function(){
    assert.equal("0131 4431212", altDetailedTotie1.phoneNumber);
  });

  it("should have a place Id", function(){
    assert.equal("1234", altDetailedTotie1.placeId);
  });

  it("should have a rating", function(){
    assert.equal(3.5, altDetailedTotie1.rating);
  });
  
  it("should set rating to undefined if rating is not present in original object", function(){
    assert.equal(undefined, altDetailedTotie2.rating);
  });

  it("should have reviews", function(){
    assert.deepEqual([
    {
      rating: 3, 
      text: "Very good"
    }, 
    {
      rating: 3.5,
      text: "Decent"
    }], altDetailedTotie1.reviews) });

  it("should set reviews to undefined if they are not present in original model", function(){
    assert.equal(undefined, altDetailedTotie2.reviews)
  })


});