


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
  }, 
  getTotie: function(searchQuery){
    var result;
    this.toties.forEach(function(totie){
      if(totie.name.includes(searchQuery)){
        result = totie;
      }
    })
    return result;
  }, 
  checkTypes: function(totie, searchQuery){
    var result;
    totie.types.some(function(type){
      result = type.includes(searchQuery);
    })
    return result;
  }
}


module.exports = City;