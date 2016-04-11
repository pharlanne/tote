


var DetailedTotie = function(name, lat, lng, address, phoneNumber, placeId, openNow, openingHours, priceLevel, rating, reviews, types, website){
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
  this.types = types,
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
  },
  addComment: function(input){
    var comment = {
      id: this.comments.length + 1, 
      text: input
    };
    this.comments.push(comment);
  },
  getAllComments: function(){
    var result = [];
    this.comments.forEach(function(commentObject){
      result.push(commentObject.text)
    })
    return result;
  }, 
  getComment: function(inputtedId){
    var result = [];
    this.comments.forEach(function(commentObject){
      if(commentObject.id === Number(inputtedId)){
        result.push(commentObject);
      };
    });
    return result[0].text;
  }, 
  updateComment: function(inputtedId, newText){
    this.comments.forEach(function(commentObject){
      if(commentObject.id === Number(inputtedId)){
        commentObject.text = newText;
      };
    });
  }, 
  getCommentIndex: function(inputtedId){
    var result;
    this.comments.forEach(function(commentObject){
      if(commentObject.id === Number(inputtedId)){
        result = this.comments.indexOf(commentObject);
      }
    }.bind(this));
    return result;
  },
  removeComment: function(inputtedId){
    var index = this.getCommentIndex(inputtedId);
    this.comments.splice(index, 1);
  }

}




module.exports = DetailedTotie;