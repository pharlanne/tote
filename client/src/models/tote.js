


var Tote = function(title){
  this.title = title;
  this.cities = [];
}

Tote.prototype = {
  addCity: function(city){
    this.cities.push(city);
  }
}







module.exports = Tote;