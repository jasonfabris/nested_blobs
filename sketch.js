
//let pts = [];

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
}

function make_pts(num, sd, rd) {
  
  let p = [...Array(num).keys()].map(x => x*(360/num));
  let _pts = p.map(ang => {
    x = cos(radians(ang));
    y = sin(radians(ang));
    r = randomGaussian() * sd + rd;
    return createVector(x*r,y*r);
  })
  return _pts;
}

function draw_pts(pts) {
  push();
    translate(width/2, height/2);
    beginShape();
      noFill();
      stroke(285, 75, 75, .7);
      for(i = 0; i < pts.length; i++) {
        curveVertex(pts[i].x, pts[i].y);
        //ellipse(pts[i].x, pts[i].y, 10, 10);
        //console.log(pts[i].x, pts[i].y);
      }
    endShape(CLOSE);
  pop();

}

function draw() {
  //noLoop();  
  background(155,10,100,.1);
  
  let pts = make_pts(360, width/100, width/3);
  draw_pts(pts);

  let pts2 = make_pts(8, width/30, width/4);
  draw_pts(pts2);
  

//   for(int fct = 0; fct < 360; fct++) {    
//     float x = cos(radians(fct));
//     float y = sin(radians(fct));
//     float r = random(180,280);
    
//     pts[fct] = new PVector(x,y,r);
    
//     //ellipse(x*r, y*r, 10, 10);
    
// }

}



