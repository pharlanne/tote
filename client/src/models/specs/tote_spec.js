var assert = require('chai').assert;
var Tote = require('../tote.js');
var DetailedTotie = require('../detailed_totie.js')
var City = require('../city.js')

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
  types: ["bar", "food"],
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

var detailedTotie2 = new DetailedTotie( detailedPlaceResultTwo.name, detailedPlaceResultTwo.geometry.location.lat, detailedPlaceResultTwo.geometry.location.lng, detailedPlaceResultTwo.formatted_address, detailedPlaceResultTwo.formatted_phone_number, detailedPlaceResultTwo.place_id, detailedPlaceResult.opening_hours.open_now, detailedPlaceResultTwo.opening_hours.weekday_text, detailedPlaceResultTwo.price_level, detailedPlaceResultTwo.rating, detailedPlaceResultTwo.reviews, detailedPlaceResultTwo.types, detailedPlaceResultTwo.website )

var detailedTotie3 = new DetailedTotie( detailedPlaceResultThree.name, detailedPlaceResultThree.geometry.location.lat, detailedPlaceResultThree.geometry.location.lng, detailedPlaceResultThree.formatted_address, detailedPlaceResultThree.formatted_phone_number, detailedPlaceResultThree.place_id, detailedPlaceResultThree.opening_hours.open_now, detailedPlaceResultThree.opening_hours.weekday_text, detailedPlaceResultThree.price_level, detailedPlaceResultThree.rating, detailedPlaceResultThree.reviews, detailedPlaceResultThree.types, detailedPlaceResultThree.website )



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

var cityGoogleObjectTwo = {
  address_components: [
  {short_name: "Edinburgh", long_name: "Edinburgh"}, 
  {short_name: "UK", long_name: "United Kingdom"}
  ],
  geometry: {
    location:{
      lat: 36, 
      lng: -71.002
    }
  }
}

var params = {
  "name": cityGoogleObject.address_components[0].long_name,
  "country": cityGoogleObject.address_components[1].long_name,
  "lat": cityGoogleObject.geometry.location.lat, 
  "lng": cityGoogleObject.geometry.location.lng
}
var paramsTwo = {
  "name": cityGoogleObjectTwo.address_components[0].long_name,
  "country": cityGoogleObjectTwo.address_components[1].long_name,
  "lat": cityGoogleObjectTwo.geometry.location.lat, 
  "lng": cityGoogleObjectTwo.geometry.location.lng
}

var cityOne = new City( params );
var cityTwo = new City( paramsTwo );

cityOne.addTotie(detailedTotie1);
cityOne.addTotie(detailedTotie2);
cityTwo.addTotie(detailedTotie3);


var tote1 = new Tote("World Wish List")

describe("tote", function(){
  it("should have a title", function(){
    assert.equal("World Wish List", tote1.title);
  });

  it("should be initialzed with an empty cities holder", function(){
    assert.deepEqual([], tote1.cities);
  });

  it("should be able to add a city", function(){
    tote1.addCity(cityOne);
    assert.deepEqual([cityOne], tote1.cities);
  });

  it("should be able to hold more than one city", function(){
    tote1.addCity(cityTwo);
    assert.deepEqual([cityOne, cityTwo], tote1.cities);
  });

  it("should be able to return a city for a given city name", function(){
    assert.deepEqual(cityTwo, tote1.getCity("Edinburgh"));
  });

  it("should be able to find a cities index for a given city name", function(){
    assert.equal(0, tote1.getCityIndex("New York"));
  });
  







})