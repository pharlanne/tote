


var DetailedResultDisplay = function(detailedResult){
  this.detailedResult = detailedResult;
  this.modalArea = document.createElement("div");
  this.header = document.createElement("div");
  this.selectionArea = document.createElement("div");
  this.contentArea = document.createElement("div");
  this.footer = document.createElement("div")
}


DetailedResultDisplay.prototype = {
  
  setMainAreaId: function(){
    this.modalArea.id = this.detailedResult.name;
  },
  setMainAreaClass: function(element){
    this.modalArea.class = "modal";
  }, 
  setHeaderClass: function(){
    this.header.class = "modal-header";
  },
  setHeaderContent: function(){
    this.header.innerHTML = this.detailedResult.name;
  },
  setSelectionAreaClass: function(){
    this.selectionArea.class = "modal-content-options"
  }


  populateSelectionArea: function(property) {
    var selectionButton = document.createElement("input")
    selectionButton.type = "submit";
    selectionButton.value = property;
    this.selectionArea.appendChild(selection)
  }






}


