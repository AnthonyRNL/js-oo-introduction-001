function Owner(name,bikes){
  this.name = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function(name, bikeType, frameColor){
  this.bikes.push(new Bike(name, bikeType, frameColor))
}

Owner.prototype.rideBike = function(nom, miles){
  this.bikes.forEach(function(e){
    if(e.name === nom){
      e.takeForARide(miles)
    }
  })
}
