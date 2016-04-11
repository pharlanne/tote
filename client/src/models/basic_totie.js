


var BasicTotie = function(name, lat, lng, placeId, rating, types ){
  this.name = name, 
  this.location = {
    lat: lat,
    lng: lng
  },
  this.placeId = placeId,
  this.rating = rating, 
  this.types = types
}

module.exports = BasicTotie;