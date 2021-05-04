class Dustbin {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic:true
      }
      this.leftWall = Bodies.rectangle(x, y,20,100, options);
      this.leftWallwidth = 20;
      this.leftWallheight= 100;
      
      this.rightWall = Bodies.rectangle(x+140, y,20,100, options);
      this.rightWallwidth = 20;
      this.rightWallheight= 100;
      
      this.bottomWall = Bodies.rectangle(x+70, y+40,100,20, options);
      this.bottomWallwidth = 150;
      this.bottomWallheight= 20;

      World.add(world, this.rightWall);
      World.add(world, this.leftWall);
      World.add(world, this.bottomWall)

      this.image = loadImage('dustbin.png')
    }
    display(){
      var pos =this.leftWall.position;
      var angle = this.leftWall.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("blue")
      strokeWeight(3)
      fill("green");
      //rect(0, 0, this.leftWallwidth, this.leftWallheight);
      pop();

      var pos =this.rightWall.position;
      var angle = this.rightWall.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("blue")
      strokeWeight(3)
      fill("green");
      //rect(0, 0, this.rightWallwidth, this.rightWallheight);
      pop();

      var pos =this.bottomWall.position;
      var angle = this.bottomWall.angle;
      
      fill("green");
      image(this.image ,pos.x-73, pos.y-90, this.bottomWallwidth, this.bottomWallheight+80);
    }
  };