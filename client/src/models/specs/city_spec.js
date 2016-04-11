var assert = require('chai').assert;
var City = require('../city.js');
var DetailedTotie = require('../detailed_totie.js')

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
  formatted_address: "32 George Street, Edinburgh EH4 2HT, United Kingdom",
  formatted_phone_number: "0131 4413333",
  geometry: {
    location: {
      lat: 89, 
      lng: 12
    }
  }, 
  name: "All Bar One", 
  opening_hours: {
    open_now: true,
    weekday_text: [
      "Monday: 11:00 AM - 12:00 AM", 
      "Tuesday: 11:00 AM - 12:00 AM", 
      "Wednesday: 11:00 AM - 12:00 AM", 
      "Thursday: 11:00 AM - 12:00 AM", 
      "Friday: 11:00 AM - 2:00 AM", 
      "Saturday: 11:00 AM - 2:00 AM", 
      "Sunday: 11:00 AM - 11:00 AM", 
    ]
  }, 
  place_id:  "5678", 
  price_level: 4,
  rating: 4, 
  reviews: [
    {
      rating: 4, 
      text: "Really good atmosphere"
    }, 
    {
      rating: 2,
      text: "Food was awful"
    }
  ],
  types: ["restaurant", "bar", "food"],
  website: "www.allbarone.co.uk",
}

var detailedPlaceResultThree = {
  formatted_address: "2 Rose Street, Edinburgh EH5 2HT, United Kingdom",
  formatted_phone_number: "0131 4413366",
  geometry: {
    location: {
      lat: 12, 
      lng: 56
    }
  }, 
  name: "Marks and Spencers", 
  opening_hours: {
    open_now: true,
    weekday_text: [
      "Monday: 11:00 AM - 11:00 AM", 
      "Tuesday: 11:00 AM - 11:00 AM", 
      "Wednesday: 11:00 AM - 11:00 AM", 
      "Thursday: 11:00 AM - 11:00 AM", 
      "Friday: 11:00 AM - 11:00 AM", 
      "Saturday: 11:00 AM - 11:00 AM", 
      "Sunday: 11:00 AM - 10:00 AM", 
    ]
  }, 
  place_id:  "9012", 
  price_level: 4,
  rating: 4, 
  reviews: [
    {
      rating: 4, 
      text: "Really good customer service"
    }, 
    {
      rating: 3,
      text: "Food is reasonably priced and great location"
    }
  ],
  types: ["supermarket"],
  website: "www.mands.co.uk",
}

var detailedTotie1 = new DetailedTotie( detailedPlaceResult.name, detailedPlaceResult.geometry.location.lat, detailedPlaceResult.geometry.location.lng, detailedPlaceResult.formatted_address, detailedPlaceResult.formatted_phone_number, detailedPlaceResult.place_id, detailedPlaceResult.opening_hours.open_now, detailedPlaceResult.opening_hours.weekday_text, detailedPlaceResult.price_level, detailedPlaceResult.rating, detailedPlaceResult.reviews, detailedPlaceResult.types, detailedPlaceResult.website )

var detailedTotie2 = new DetailedTotie( detailedPlaceResultTwo.name, detailedPlaceResultTwo.geometry.location.lat, detailedPlaceResultTwo.geometry.location.lng, detailedPlaceResultTwo.formatted_address, detailedPlaceResultTwo.formatted_phone_number, detailedPlaceResultTwo.place_id, detailedPlaceResultTwo.opening_hours.open_now, detailedPlaceResultTwo.opening_hours.weekday_text, detailedPlaceResultTwo.price_level )

var detailedTotie3 = new DetailedTotie( detailedPlaceResultThree.name, detailedPlaceResultThree.geometry.location.lat, detailedPlaceResultThree.geometry.location.lng, detailedPlaceResultThree.formatted_address, detailedPlaceResultThree.formatted_phone_number, detailedPlaceResultThree.place_id, detailedPlaceResultThree.opening_hours.open_now, detailedPlaceResultThree.opening_hours.weekday_text, detailedPlaceResultThree.price_level )



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
    assert.equal("New York", cityOne.name);
  });

  it("should have a country", function(){
    assert.equal("United States of America", cityOne.country);
  });

  it("should have a location as an object", function(){
    assert.deepEqual({lat: 40.7142700, lng: -74.0059700 }, cityOne.location);
  });

  it("should have an empty array for holding toties", function(){
    assert.deepEqual([], cityOne.toties);
  });

  it("should be able to add a totie", function(){
    cityOne.addTotie(detailedTotie1);
    assert.deepEqual([detailedTotie1], cityOne.toties)
  })

  it("should be able to hold more than one totie", function(){
    cityOne.addTotie(detailedTotie2);
    cityOne.addTotie(detailedTotie3);
    assert.deepEqual([detailedTotie1, detailedTotie2, detailedTotie3], cityOne.toties)
  })

  it("should be able to return a specific totie for a given name", function(){
    assert.deepEqual(detailedTotie2, cityOne.getTotie("All Bar One"))
  })



})