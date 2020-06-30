var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var turn = 0;
var GameState = "Play";

var plinkos = [];
var divisions = [];

var divisionHeight=260;
var score = 0;


function setup() {
  createCanvas(800, 725);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


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
  background(0);
  
  console.log(turn)
  
  //console.log("Mouse.x", mouseX);
  //console.log("Mouse.y", mouseY);


  line(0, 425, 800, 425);
    stroke(255, 255, 255);

  text("Score : "+ score,20,30);
  textSize(20);


  text("100", 20, 500);
  text("100", 105, 500);
  text("200", 185, 500);
  text("500", 265, 500);
  text("1000", 335, 500);
  text("1000", 415, 500);
  text("500", 505, 500);
  text("200", 585, 500);
  text("100", 665, 500);
  text("100", 745, 500);


  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

     ground.display();

   }

   if(particle != null){
      particle.display();

        if(particle.body.position.y > 700){

           if(particle.body.position.x > 325 && particle.body.position.x < 485){
             score = score + 1000;
             particle = null;
             
           }
        }
   }

   if(particle != null){
    particle.display();

      if(particle.body.position.y > 700){

         if(particle.body.position.x > 250 && particle.body.position.x < 325 || particle.body.position.x > 485 && particle.body.position.x < 565){
           score = score + 500;
           particle = null;
           
         }
      }
 }

 if(particle != null){
  particle.display();

    if(particle.body.position.y > 700){

       if(particle.body.position.x > 570 && particle.body.position.x < 645 || particle.body.position.x > 170 && particle.body.position.x < 245){
         score = score + 200;
         particle = null;
         
       }
    }
}

if(particle != null){
  particle.display();

    if(particle.body.position.y > 700){

       if(particle.body.position.x > 650 && particle.body.position.x < 800 || particle.body.position.x > 0 && particle.body.position.x < 165){
         score = score + 100;
         particle = null;
         
       }
    }
}
if ( turn >= 5){
  GameState = "End"; 
  text("Your Chances Has Ended",150, 30);
} 
}

function mousePressed(){
  if(GameState !== "End"){
      turn = turn + 1 ;
    particle = new Particle(mouseX, 10, 10, 10);
    
  }
  
}