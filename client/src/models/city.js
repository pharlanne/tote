


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
  getTotiesType: function(searchQuery){
    var results = [];
    this.toties.forEach(function(totie){
      totie.types.forEach(function(type){
        if(type === searchQuery){
          results.push(totie);
        } 
      }.bind(this))
    }.bind(this))

    if(results.length > 0 ){
      return results;
    } else {
      return null
    }
  },
  getTotieIndex: function(searchQuery){
    var totie = this.getTotie(searchQuery)
    return this.toties.indexOf(totie)
  },
  removeTotie: function(searchQuery){
    var index = this.getTotieIndex(searchQuery);
    this.toties.splice(index,1)
  }




}


module.exports = City;