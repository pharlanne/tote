


var DetailedResultDisplay = function(detailedResult){
  this.detailedResult = detailedResult,
  this.displayArea = document.createElement("div"),
  this.header = document.createElement("div"),
  this.selectionArea = document.createElement("div"),
  this.contentArea = document.createElement("div"),
  this.footer = document.createElement("div"),
  this.selectionButton = null,
  this.hideSelectionButton = null
}


DetailedResultDisplay.prototype = {
  
  setMainAreaId: function(){
    this.displayArea.id = this.detailedResult.name;
  },
  setMainAreaClass: function(element){
    this.displayArea.class = "display";
  }, 
  setHeaderClass: function(){
    this.header.class = "display-header";
  },
  setHeaderContent: function(){
    this.header.innerHTML = this.detailedResult.name;
  },
  setSelectionAreaClass: function(){
    this.selectionArea.class = "display-content-options"
  },
  setSelectionButtonReferences: function(){
    this.selectionButton = document.createElement("input");
    this.selectionButton.type = "submit";
    this.selectionButton.id = this.detailedResult.name;
    this.selectionButton.value = "see details";
    this.selectionArea.appendChild(this.selectionButton);
  },
  setHideSelectionButtonReferences: function(){
    this.hideSelectionButton = document.createElement("input");
    this.hideSelectionButton.type = "submit";
    this.hideSelectionButton.id = "hide";
    this.hideSelectionButton.value = "hide details";
  },
  populateSelectionArea: function() {
    // console.log(this.selectionButton)
    this.selectionArea.appendChild(this.selectionButton);
    this.selectionArea.appendChild(this.hideSelectionButton);
  },
  setAreaReferences: function(){
    this.setMainAreaId();
    this.setMainAreaClass();
    this.setHeaderClass();
    this.setHeaderContent();
    this.setSelectionAreaClass();
    this.setSelectionButtonReferences();
    this.setHideSelectionButtonReferences();
  },
  setSelectionButtonDisplay: function(){
    this.selectionButton.onclick = function(){
      var div = document.createElement("div");
      var ul = document.createElement("ul");
      var li = document.createElement("li");
      li.innerText = this.detailedResult.address;
      ul.appendChild(li)
      
      var li = document.createElement("li");
      li.innerText = this.detailedResult.allOpeningHours;
      ul.appendChild(li)

      var li = document.createElement("li");
      li.innerText = this.detailedResult.getAllReviewsText()
      ul.appendChild(li)
      div.appendChild(ul)
      this.selectionArea.appendChild(div);
    }.bind(this)
    
  },
  setHideSelectionButton: function(){
    this.hideSelectionButton.onclick = function(){
      var childNode = this.selectionArea.childNodes[2];
      this.selectionArea.removeChild(childNode);
    }.bind(this)
  }
}



module.exports = DetailedResultDisplay;

