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


var params = {
  name: detailedPlaceResult.name,
  lat: detailedPlaceResult.geometry.location.lat,
  lng: detailedPlaceResult.geometry.location.lng,
  address: detailedPlaceResult.formatted_address,
  phoneNumber: detailedPlaceResult.formatted_phone_number,
  placeId: detailedPlaceResult.place_id
}

var altDetailedTotie1 = new AltDetailedTotie(params)



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




})