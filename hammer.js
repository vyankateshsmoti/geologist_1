class Hammer{
    constructor(x,y,width,height){
        var options= {
            density : 1.0,
            friction : 1.0,
            restitution : 0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        strokeWeight(4);
        stroke ("black");
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}