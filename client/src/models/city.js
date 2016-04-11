


var City = function(params){
  this.name = params["name"],
  this.country = params["country"], 
  this.location = {
    lat: params["lat"],
    lng: params["lng"]
  }, 
  this.toties = []
}

City.prototype = {
  addTotie: function(totie){
    this.toties.push(totie);
  }
}


module.exports = City;