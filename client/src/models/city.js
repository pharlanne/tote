


var City = function(params){
  this.name = params["name"],
  this.country = params["country"], 
  this.location = {
    lat: params["lat"],
    lng: params["lng"]
  }, 
  this.toties = []
}


module.exports = City;