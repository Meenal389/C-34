class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var ang=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(ang)
        stroke("yellow")
        strokeWeight(3)
        fill("purple")
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}