class Roof {
    constructor(x,y,width,height){
        var opt = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height,opt);
        this.image = loadImage ("roof-removebg-preview.png")
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lightblue");
        image(this.image, 0,0,300,200)
        pop() ;
    }
} 