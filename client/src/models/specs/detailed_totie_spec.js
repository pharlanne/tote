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
      aspects: [{rating: 5, type: "overall"}] , 
      author_name: "John", 
      author_url: "www.mywebsite.com", 
      language: "en", 
      profile_photo: "www.photo.com", 
      rating: 5, 
      text: "Very good", 
      time: 1234
    }, 
    {
      aspects: [{rating: 3, type: "overall"}] , 
      author_name: "Jane", 
      author_url: "www.mywebsite.com", 
      language: "en", 
      profile_photo: "www.photo.com", 
      rating: 1, 
      text: "Awful", 
      time: 5678
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


var detailedTotie1 = new DetailedTotie( detailedPlaceResult.name, detailedPlaceResult.geometry.location.lat, detailedPlaceResult.geometry.location.lng, detailedPlaceResult.formatted_address, detailedPlaceResult.formatted_phone_number, detailedPlaceResult.place_id, detailedPlaceResult.opening_hours.weekday_text, detailedPlaceResult.price_level, detailedPlaceResult.rating, detailedPlaceResult.reviews, detailedPlaceResult.types, detailedPlaceResult.website )

var detailedTotie2 = new DetailedTotie( detailedPlaceResultTwo.name, detailedPlaceResultTwo.geometry.location.lat, detailedPlaceResultTwo.geometry.location.lng, detailedPlaceResultTwo.formatted_address, detailedPlaceResultTwo.formatted_phone_number, detailedPlaceResultTwo.place_id, detailedPlaceResultTwo.opening_hours.weekday_text, detailedPlaceResultTwo.price_level )

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

  // it("should store whether it is open now or not", function(){
  //   assert.equal(true, detailedTotie1.openNow)
  // })

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
    assert.deepEqual( 2, detailedTotie1.reviews.length);
  });
  
  it("should be able to return reviews in text form", function(){
    assert.deepEqual( ["Very good", "Awful"], detailedTotie1.getAllReviewsText());
  });

  it("should be able to return reviews ratings", function(){
    assert.deepEqual([5, 1], detailedTotie1.getAllReviewsRating());
  });
  
  it("should store an array of types", function(){
    assert.deepEqual(["restaurant", "bar", "food"], detailedTotie1.types)
  })

  it("should be able to store the website", function(){
    assert.equal("https://www.jdwetherspoon.com/pubs/all-pubs/scotland/edinburgh/the-standing-order-edinburgh", detailedTotie1.website);
  });
  
  it("should have a comments holder which is empty at the start", function(){
    assert.deepEqual([], detailedTotie1.comments);
  });

  it("should be able to add commments", function(){
    detailedTotie1.addComment("This looks like a nice and cheap place to eat?");
    assert.deepEqual([{"id": 1, "text": "This looks like a nice and cheap place to eat?"}], detailedTotie1.comments)
  })

  it("should be able to hold more than one comment", function(){
    detailedTotie1.addComment("Need to check if they do vegen and gluten free");
    assert.deepEqual([{"id": 1, "text": "This looks like a nice and cheap place to eat?"}, {"id": 2, "text": "Need to check if they do vegen and gluten free"}], detailedTotie1.comments)
  })

  it("should be able to return comments as text only", function(){
    assert.deepEqual(["This looks like a nice and cheap place to eat?", "Need to check if they do vegen and gluten free"], detailedTotie1.getAllComments())
  })

  it("should be able to return a specific comment with a given id", function(){
    assert.deepEqual("Need to check if they do vegen and gluten free", detailedTotie1.getComment(2))
  })

  it("should be able to return a specific comment even if given id is a string", function(){
    assert.deepEqual("This looks like a nice and cheap place to eat?", detailedTotie1.getComment("1"))
  })

  it("should be able to update a specific comment", function(){
    detailedTotie1.updateComment(1, "This looks like a cheap place to eat.")
    assert.deepEqual("This looks like a cheap place to eat.", detailedTotie1.getComment(1))
  })

  it("should have a function to return a commments index", function(){
    assert.equal(1, detailedTotie1.getCommentIndex(2))
  })

  it("should return undefined if index does not exist", function(){
    assert.equal(undefined, detailedTotie1.getCommentIndex(3))
  })

  it("should be able to remove a comment for given id", function(){
    detailedTotie1.addComment("This is a lovely looking bar!");
    detailedTotie1.removeComment(3);
    assert.deepEqual(["This looks like a cheap place to eat.", "Need to check if they do vegen and gluten free"], detailedTotie1.getAllComments())
  })
})