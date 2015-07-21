function Bike(name, bikeType, frameColor,condition){
  this.name = name;
  this.bikeType = bikeType;
  this.frameColor = frameColor;
  this.WHEELS = 2;
  this.miles = 0;
  this.condition = "ready to go!";

}

Bike.prototype.takeForARide = function(miles){
  this.miles = miles
  if(this.miles > 50){
    this.condition = "needs a tune up"
  }
};

Bike.prototype.tuneUp = function(){
  this.condition = "ready to go!"
}
