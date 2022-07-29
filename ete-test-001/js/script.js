let img;
let vid;
let theta = 0;

function setup() {
  createCanvas(500, 500, WEBGL);

  img = loadImage("source/Seeing.PNG");
}

function draw() {
  background(250);
  translate(0, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  //pass image as texture
  texture(img);
  sphere(150);
  pop();
  translate(440, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img);
  pop();
  theta += 0.05;
}

