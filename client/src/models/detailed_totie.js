


var DetailedTotie = function(name, lat, lng, address, placeId, openNow, openingHours){
  this.name = name, 
  this.location = {
    lat: lat, 
    lng: lng
  }, 
  this.address = address, 
  this.placeId = placeId, 
  this.openNow = openNow, 
  this.allOpeningHours = openingHours

}






module.exports = DetailedTotie;