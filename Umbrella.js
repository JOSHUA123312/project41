class Umbrella{
    constructor(x,y,radius){
        var options = {
            isStatic:true
            
        }
      this.body = Bodies.circle(x, y,radius/3, options);
      this.x=x
      this.y=y
      this.radius= radius
      this.image=loadImage("walking_1.png")
      World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}