class Box {
    constructor(x,y,width,height,b) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.b = b;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.b);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };