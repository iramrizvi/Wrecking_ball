class Ball {
  constructor(x, y, width, height, angle) {
    var options = { 
      density: 2, 
      frictionAir: 0.0001};
this.image = loadImage("balli.png");

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.a = Math.round(random(0,256));
    this.b = Math.round(random(0,256));
    this.c = Math.round(random(0,256));
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    // stroke(this.a,this.b,this.c);
    // fill (this.a,this.b,this.c);
    // ellipse(0, 0, this.width, this.height);
    pop();
  }
}
