class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,10, options);
      this.radius = 10;
      this.image = loadImage('paper.png')
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      stroke("blue")
      strokeWeight(3)
      fill("red");
      image(this.image, 0, 0, this.radius*3, this.radius*3);
      pop();
    }
  };
  