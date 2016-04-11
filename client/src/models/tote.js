


var Tote = function(title){
  this.title = title;
  this.cities = [];
}

Tote.prototype = {
  addCity: function(city){
    this.cities.push(city);
  },
  getCity: function(cityName){
    var results;
    this.cities.forEach(function(city){
      if(city.name === cityName){
        results = city
      }
    })
    return results;
  },
  getCityIndex: function(cityName){
    var city = this.getCity(cityName);
    return this.cities.indexOf(city);
  }
}









module.exports = Tote;