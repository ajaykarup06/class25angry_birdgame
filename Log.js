class Log extends BaseClass {
    constructor(x, y, height, angle) {
      super(x,y,15,height,angle)
      this.image=loadImage("imagesFolder/wood2.png")
      
      Matter.Body.setAngle(this.body, angle);
      
    }
    display(){
      super.display()
    }
      
  };
  