class Bullet {
    constructor(x, y, angle) {
      this.x = x;
      this.y = y;
      this.angle = angle;
      this.speed = 16;
    }
    
    
    draw() {
      push();
      fill(73,198,212);
      circle(this.x, this.y, 10);
      pop();
    }
    
    update() {
      this.x += this.speed * cos(this.angle);
      this.y += this.speed * sin(this.angle);
    }
  }