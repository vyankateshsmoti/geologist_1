class Sand{
  constructor(x,y,RADIUS){
      var options = {
          density : 1.0,
          friction : 1.0,
          restitution : 1
      }
      this.body = Bodies.circle(x,y,RADIUS,options);
      this.radius = RADIUS;
      World.add(world,this.body);

  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("orange");
      ellipse(0,0,this.radius);
      pop();
  }

}