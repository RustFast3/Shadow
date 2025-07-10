var bello=0;


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(133,240,random(0,250),bello,bello); 
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  stroke(130,30,160) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,20,20); // center of canvas, 20px dia
  strokeWeight(10);
  stroke(230,34,69);
  fill(mouseX,193,98);
  rect(random(0,250,),random(height),bello,bello);

  stroke(210,145,145,);
  line(bello,20,400,bello);
  strokeWeight(4);
  triangle(90,bello,290,250,340,485);
  fill(145,300,210);
  textSize(40);
  textFont('Impact');
  text('I am always HERE!',200,100);

}

function mousePressed (){
  if (bello>=200) 
{bello=0;    
} else {
bello=bello+10;
}


}
