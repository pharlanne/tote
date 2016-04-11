


var BasicTotie = function(name, lat, lng, placeId, priceLevel, rating, types ){
  this.name = name, 
  this.location = {
    lat: lat,
    lng: lng
  },
  this.placeId = placeId,
  this.priceLevel = priceLevel,
  this.rating = rating, 
  this.types = types
}

module.exports = BasicTotie;