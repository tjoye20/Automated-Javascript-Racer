var Station = function(name, location, bikes) {
  this.name = name;
  this.location = location;
  this.bikes = bikes;
  this.capacity = 30;
}

Station.prototype.empty = function() {
  return this.bikes.length == 0
}

Station.prototype.newestBike = function() {
  return this.bikes.sort(function(a,b) {
    return a.modelYear-b.modelYear}).pop();
}

Station.prototype.take = function(bike) {
  if((this.bikes.length < this.capacity) && (bike.isDamaged != false)) {
  this.bikes.push(bike);
  }
}

Station.prototype.takeMultiple = function(new_bikes) {
  if(this.bikes.length < this.capacity) {
    this.bikes = this.bikes.concat(new_bikes);
  }
}

Station.prototype.release = function(bike) {
  return this.newestBike();
}

Station.prototype.damagedBikes = function() {
  var numOfDamagedBikes = 0
  this.bikes.forEach(function(bike) {
    if (bike.isDamaged() == true) {
        numOfDamagedBikes += 1;
    }
  })
  return numOfDamagedBikes;
}
