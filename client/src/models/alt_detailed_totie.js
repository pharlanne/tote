


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
  this.reviews = params["reviews"]
  // this.priceLevel = params["priceLevel"],
  
  
  // this.types = params["types"],
  // this.website = params["website"]

}






module.exports = AltDetailedTotie;