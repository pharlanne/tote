var assert = require('chai').assert;
var DetailedTotie = require('../detailed_totie.js');

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
    open_now: true,
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


var detailedTotie1 = new DetailedTotie( detailedPlaceResult.name, detailedPlaceResult.geometry.location.lat, detailedPlaceResult.geometry.location.lng, detailedPlaceResult.formatted_address, detailedPlaceResult.place_id, detailedPlaceResult.opening_hours.open_now, detailedPlaceResult.opening_hours.weekday_text )

describe("Detailed Totie", function(){
  it("should be able to store a name", function(){
    assert.equal("Wetherspoons", detailedTotie1.name);
  });

  it("should be able to store a latitude and longitude as an object", function(){
    assert.deepEqual({lat: 39, lng:87}, detailedTotie1.location);
  });

  it("should store an address", function(){
    assert.equal("20 Princes Street, Edinburgh EH1 1HT, United Kingdom", detailedTotie1.address);
  });

  it("should store a place id", function(){
    assert.equal("1234", detailedTotie1.placeId);
  });

  it("should store whether it is open now or not", function(){
    assert.equal(true, detailedTotie1.openNow)
  })

  it("should store opening hours for all 7 days", function(){
    assert.deepEqual([
      "Monday: 11:00 AM - 1:00 AM", 
      "Tuesday: 11:00 AM - 1:00 AM", 
      "Wednesday: 11:00 AM - 1:00 AM", 
      "Thursday: 11:00 AM - 1:00 AM", 
      "Friday: 11:00 AM - 1:00 AM", 
      "Saturday: 11:00 AM - 1:00 AM", 
      "Sunday: 11:00 AM - 1:00 AM", 
    ], detailedTotie1.allOpeningHours )
  })

  it("should be able to return a given days opening hours", function(){
    assert.deepEqual(["Wednesday: 11:00 AM - 1:00 AM"], detailedTotie1.getOpeningHours("Wednesday"));
  });

  it("should return multiple")


})