const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

var engine,world
var boy
var drops=[]
var maxDrops=50
var thunder
var thunderFrame=0


function preload(){
    thunder1=loadImage("1.png")
    thunder2=loadImage("2.png")
    thunder3=loadImage("3.png")
    thunder4=loadImage("4.png")
}

function setup(){
   createCanvas(500,700)

  engine = Engine.create();
  world = engine.world;

  boy=new Umbrella(200,500,400)

  for(var i=0;i<maxDrops;i++){
      drops.push(new Drops(random(0,500),random(0,500)))
  }
 
   
}

function draw(){
    Engine.update(engine)
    background(0)
  
    rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thunderFrame=frameCount
        thunder=createSprite(random(10,370),random(10,30,10,10))
        switch(rand){
            case 1:thunder.addImage(thunder1)
            break;
            case 2:thunder.addImage(thunder2)
            break;
            case 3:thunder.addImage(thunder3)
            break;
            case 4:thunder.addImage(thunder4)
            break;
            default:break;
        }
        thunder.scale=0.5    
    }

    if(thunderFrame+10===frameCount&&thunder){
        thunder.destroy()
    }
    
    boy.display()

    for(var i=0;i<maxDrops;i++){
        drops[i].display()
        drops[i].update()
    }

    drawSprites()
}   

