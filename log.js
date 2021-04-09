class Log {
constructor(x, y, height, angle) {
      var options = {
          'restitution':0.4,
          'friction':1.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 10, height, options);
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      stroke("blue");
      strokeWeight(3);
      rect(0, 0, 10, this.height);
      pop();
    }
  };