


var DetailedTotie = function(name, lat, lng, address, placeId, openNow){
  this.name = name, 
  this.location = {
    lat: lat, 
    lng: lng
  }, 
  this.address = address, 
  this.placeId = placeId, 
  this.openNow = openNow

}






module.exports = DetailedTotie;