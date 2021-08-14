class Drops{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.1
        }
        this.body = Bodies.circle(x, y,20, options);
        this.x=x
        this.y=y
        this.radius= 20
        World.add(world, this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,500)})
        }
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER);
        fill(0,0,255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}