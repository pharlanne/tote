


var AltDetailedTotie = function(params){
  this.name = params["name"],
  this.location = {
    lat: params["lat"], 
    lng: params["lng"]
  },
  this.address = params["address"],
  this.phoneNumber = params["phoneNumber"],
  this.placeId = params["placeId"],
  this.rating = params["rating"],
  this.reviews = params["reviews"],
  this.types = params["types"],
  this.website = params["website"], 
  this.comments = []

}

AltDetailedTotie.prototype = {
  getAllReviewsText: function(){
    var results = [];
    this.reviews.forEach(function(review){
      results.push(review.text);
    });
    return results;
  },
  getAllReviewsRating: function(){
    var results = [];
    this.reviews.forEach(function(review){
      results.push(review.rating);
    })
    return results;
  },
  getComments: function(){
    var results = [];
    this.comments.forEach(function(comment){
      results.push(comment);
    });
    return results;
  },
  addComment: function(userInput){
    this.comments.push(userInput.toString());
  }
  
 
}






module.exports = AltDetailedTotie;