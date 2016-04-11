


var DetailedTotie = function(name, lat, lng, address, phoneNumber, placeId, openNow, openingHours, priceLevel, rating, reviews, website){
  this.name = name, 
  this.location = {
    lat: lat, 
    lng: lng
  }, 
  this.address = address, 
  this.phoneNumber = phoneNumber,
  this.placeId = placeId, 
  this.openNow = openNow, 
  this.allOpeningHours = openingHours,
  this.priceLevel = priceLevel,
  this.rating = rating,
  this.reviews = reviews, 
  this.website = website,
  this.comments = []

}

DetailedTotie.prototype = {
  getOpeningHours: function(day){
    var result = [];
    this.allOpeningHours.forEach(function(dayOpeningHours){
      if (dayOpeningHours.includes(day)){
        result.push(dayOpeningHours)
      }
    })
  return result
  },
  getAllReviewsText: function(){
    var result = [];
    for (review of this.reviews){
      result.push(review.text);
    }
    return result;
  }

}




module.exports = DetailedTotie;