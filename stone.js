class Stone{
    constructor(x,y,width,height){
        var options={
            density : 1.0,
            friction : 1.0,
            restitution : 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }


}