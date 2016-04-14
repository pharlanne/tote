


var DetailedResultHolder = function(map){
  this.element = document.createElement("div")
  // this.basicTotie = basicTotie;
  this.map = map;
  this.placeDetails = null;
  this.detailedTotie = null;
  // this.altDetailedTotie = null;
  this.service = new google.maps.places.PlacesService(document.createElement("div"))
}

DetailedResultHolder.prototype = {
  createPlaceRequest: function(){
    var request = {
      placeId: this.basicTotie.placeId
    }
    return request;
  }, 
  getPlaceDetails: function(){
    // console.log()
    var placeResult;
    this.service.getDetails(this.createPlaceRequest(), function(status, result){
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.error(status);
        return;
      }
      this.placeResult = result;
    })
    
  },
  createDetailedTotie: function(googleObject, detailedTotieConstrFunc){
    // var result = this.getPlaceDetails();
    // console.log(result)
    var detailedTotie = new detailedTotieConstrFunc(googleObject.name, googleObject.geometry.location.lat(), googleObject.geometry.location.lng(), googleObject.formatted_address, googleObject.formatted_phone_number, googleObject.place_id, googleObject.opening_hours.weekday_text, googleObject.price_level, googleObject.rating, googleObject.reviews, googleObject.types, googleObject.website);
    this.detailedTotie = detailedTotie;
  }, 
  createAltDetailedTotie: function(params, altDetailedTotieConstrFunc){
    var altDetailedTotie = new altDetailedTotieConstrFunc(params);
    this.detailedTotie = altDetailedTotie;
  }, 
  filterGoogleResult: function(object){
    var result;
    if(object.opening_hours === undefined){
      result = false;
    } else {
      result = true;
    }
   return result;
  }, 
  initiateTotieConstruction: function(detailedTotieConstrFunc, altDetailedTotieConstrFunc, params, object){
    if(this.filterGoogleResult(object) === true){
      this.createDetailedTotie(object, detailedTotieConstrFunc);
    } else if (this.filterGoogleResult(object) === false){
      this.createAltDetailedTotie(params, altDetailedTotieConstrFunc);
    }
  }
}





module.exports = DetailedResultHolder;