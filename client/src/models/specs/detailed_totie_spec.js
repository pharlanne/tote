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

var detailedPlaceResultTwo = {
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
  price_level: 2,
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


var detailedTotie1 = new DetailedTotie( detailedPlaceResult.name, detailedPlaceResult.geometry.location.lat, detailedPlaceResult.geometry.location.lng, detailedPlaceResult.formatted_address, detailedPlaceResult.formatted_phone_number, detailedPlaceResult.place_id, detailedPlaceResult.opening_hours.open_now, detailedPlaceResult.opening_hours.weekday_text, detailedPlaceResult.price_level, detailedPlaceResult.rating, detailedPlaceResult.reviews )

var detailedTotie2 = new DetailedTotie( detailedPlaceResultTwo.name, detailedPlaceResultTwo.geometry.location.lat, detailedPlaceResultTwo.geometry.location.lng, detailedPlaceResultTwo.formatted_address, detailedPlaceResultTwo.formatted_phone_number, detailedPlaceResultTwo.place_id, detailedPlaceResultTwo.opening_hours.open_now, detailedPlaceResultTwo.opening_hours.weekday_text, detailedPlaceResultTwo.price_level )

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

  it("should store a phone number", function(){
    assert.equal("0131 4431212", detailedTotie1.phoneNumber)
  })

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

  it("should be return undefined if price level is not present", function(){
    assert.equal(undefined, detailedTotie1.priceLevel);
  });

  it("should return price level if it is present", function(){
    assert.equal(2, detailedTotie2.priceLevel);
  });

  it("should be able to store and return rating", function(){
    assert.equal(3.5, detailedTotie1.rating);
  });

  it("should be able to store reviews", function(){
    assert.deepEqual( 2, detailedTotie1.reviews.length)
  })
  
  it("should be able to return reviews in text form", function(){
    assert.deepEqual( ["Very good", "Decent"], detailedTotie1.getAllReviewsText() )
  })
  

})