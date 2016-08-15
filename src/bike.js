var Bike = function(id, color, modelYear) {
  this.id = id;
  this.color = color;
  this.modelYear = modelYear;
  this.issues = [];
}

Bike.prototype.isDamaged = function() {
  if(this.issues.length === 0) {
    return false;
  }
  else {
    return true;
  };
};

Bike.prototype.addIssues = function(issue) {
  this.issues.push(issue);
}

Bike.prototype.repairAll = function() {
  this.issues = [];
}
