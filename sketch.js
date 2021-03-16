var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turns = 0;

var gameState=0;
var start=0;
var end=1;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Land(width/2,height,width,20);

 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  showGrid()
 
  push();
  textSize(20)
  fill ("red")
  stroke("red")
  strokeWeight(2)
  text("Score: "+score, 50,25)

  fill("yellow")
  stroke("yellow")
  strokeWeight(1)

  text("50",25,500)
  text("75",110,500)
  text("100",180,500)
  text("150",260,500)
  text("200",340,500)
  text("200",420,500)
  text("150",500,500)
  text("100",580,500)
  text("75",660,500)
  text("50",740,500)

  pop ();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

if(turns=5){
  gameState=end
  text("Press space",600,50)
}

scoring();


}

function mousePressed(){

  if(gameState==start){
    particles.push(new Particle(mouseX,10,10));

    turns=turns+1
  }
}

function scoring (){
  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x<75){
        score=score+50
      }
      else  if(particle.body.position.x<160){
        score=score+75
      }
      else if(particle.body.position.x<240){
        score=score+100
      }
      else if(particle.body.position.x<320){
        score=score+150
      }
      else if(particle.body.position.x<400){
        score=score+200
      }
      else if(particle.body.position.x<480){
        score=score+200
      }
      else if(particle.body.position.x<555){
        score=score+150
      }
      else if(particle.body.position.x<640){
        score=score+100
      }
      else if(particle.body.position.x<720){
        score=score+75
      }
      else if(particle.body.position.x<780){
        score=score+50
      }
    }
  }
}