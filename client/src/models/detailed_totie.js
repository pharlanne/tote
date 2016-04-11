


var DetailedTotie = function(name, lat, lng, address, placeId, openNow, openingHours, priceLevel){
  this.name = name, 
  this.location = {
    lat: lat, 
    lng: lng
  }, 
  this.address = address, 
  this.placeId = placeId, 
  this.openNow = openNow, 
  this.allOpeningHours = openingHours,
  this.priceLevel = priceLevel

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
  }

}




module.exports = DetailedTotie;