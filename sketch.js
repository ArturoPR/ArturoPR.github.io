var javi;

var muerto;

var lol;
var song;

var sound;

var lol1, lol2, lol3, peke1, peke2, peke3;
var xball, yball, bvel,x,y;
var xballmalo, yballmalo, bvelmalo,xmalo,ymalo,xrep,yrep;
var col1,col2,col3;
var sioq;
var yesorwat;
var punt;
var dific1;
var dific2;
var show;
var show2;
var wow;
var img2;
var img3;
var img4;
var img5;
var img6;
var javiPlay,full;

var fx,fy;
var showplay1,showplay2,showplay3;

var pausa1,pausa2,pos1,pos2,pos3,pos4;

var xj;
var yj;
var velx;
var vely;
    
var img5;

var s0,s1,s2,s3,s4;

var playx,playy;

function preload(){
  lol = loadSound('data/pumoof.mp3');
  song = loadSound('data/If_I_Had_a_Chicken.mp3');
  
  wow = loadImage("data/sebas1.png");
  img2 = loadImage("data/sebas2.png");
  img3 = loadImage("data/sebas3.png");
  img4 = loadImage("data/francotirador.png");
  img5 = loadImage("data/javi.png");
  img6 = loadImage("data/sebas mini.png");
  javiPlay = loadImage("data/play javi.png");

  s0 = loadImage("data/sound0.png");
  s1 = loadImage("data/sound1.png");
  s2 = loadImage("data/sound2.png");
  s3 = loadImage("data/sound3.png");
  s4 = loadImage("data/sound4.png");
  
  img5 = loadImage("data/javi.png");
  full = loadImage("data/full.png");
}

function setup(){
  muerto=false;
  sound=2;
  song.setVolume(1);
  lol.setVolume(1);
  //translate(width/2,height/2);
  sioq=0;
  yesorwat=0;
  punt = 4;
  xj =random(0,width);
  yj =random(0,height);
  velx=random(-20,20);
  vely=random(-20,20);
  
  song.loop();
  createCanvas(displayWidth,displayHeight);
show=0;
  show2=255;
  dific1=5+punt/5;
  dific2=7+punt/5;
  xball=0;
  yball=random (height/15,height/15*14);
  xballmalo=0;
  yballmalo=random (height/15,height/15*14);
  xballmalo=width;
  yballmalo=random (height/15,height/15*14);
  col1 = 0;
  col2 = 0;
  col3 = 0;
  bvel = random(dific1,dific2);
  
  pausa1=false;
  pausa2=false;
  }

function draw (){ 
  if(sioq>0){
    col1=random(0,255);
    col2=random(0,255);
    col3=random(0,255);
  }else{
    col1 = 0;
    col2 = 0;
    col3 = 0;
  }
  if(mouseIsPressed){
    noCursor();
  }else{
    cursor(ARROW);
  }
  dific1=5+punt/5;
  dific2=7+punt/5;
  translate(0,0);
  background(col1,col2,col3);
  textSize(100);
  fill(255,255,255);
  textAlign(CENTER, CENTER);
  
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(255);
  text(punt,width/2,height/5);
    
  noStroke ();
  fill(col1,col2,col3);
  //fill(255);
  ellipse (xball, yball,50,50);
  if (xball>=width){
    textSize(130);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Game Over", width/2,height/2);
    textSize(100);
    fill(255,255,255);
    textAlign(CENTER, CENTER);
    if(sioq<1){
    text("PLAY",width/2,height/10*8);
  }
    xball=width*2;
    xrep=width*2;
    xballmalo=-width*2;
    show=255;
    show2=0;
    if(sioq>0){
      imageMode(CENTER);
      javiPlay.resize(255,99);
      image(javiPlay,width/2,height/10*8);
    }
    if(mouseY>height/10*7 && mouseIsPressed && mouseX > width/2-width/10*3 && mouseX < width/2+width/10*3){
      muerto=true;
    }
 
    }else{
      xball+=bvel;
    }
  if(xball > fx-75 && xball < fx+75 && yball > fy-75 && yball < fy+75){
    xball = 0;
    yball=random (height/15,height/15*14);
    bvel=random(dific1,dific2);
    punt++;
    lol.play();
  }
  
  noStroke ();
  fill(col1,col2,col3);
  //fill(255);
  ellipse (xrep, yrep,50,50);
  if (xrep<=0){
    xrep = width;
    yrep=random (height/15,height/15*14);
    bvel=random(dific1,dific2);
    punt-=5;
    }else{
      xrep-=bvel;
    }
  if(xrep > fx-75 && xrep < fx+75 && yrep > fy-75 && yrep < fy+75){
    xrep = width;
    yrep=random (height/15,height/15*14);
    bvel=random(dific1,dific2);
    punt++;
    lol.play();
  }
   
  noStroke ();
  fill(col1,col2,col3);
  //fill(255,0,0);
  ellipse (xballmalo, yballmalo,50,50);
  if(xball==xballmalo+-25 && yball==yballmalo+-25){
    yballmalo=random(height/15,height/15*14);
    xballmalo=0;
  }
  if (xballmalo>=width){
    xballmalo = 0;
    yballmalo=random (height/15,height/15*14);
    bvel=random(dific1,dific2);
    punt++;
 }
  if(xballmalo > fx-75 && xballmalo < fx+75 && yballmalo > fy-75 && yballmalo < fy+75){   
    textSize(130);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Game Over", width/2,height/2);
    textSize(100);
    fill(255,255,255);
    textAlign(CENTER, CENTER);
    if(sioq<1){
    text("PLAY",width/2,height/10*8);
  }
    xball=width*2;
    xrep=width*2;
    xballmalo=-width*2;
    show=255;
    show2=0;
    if(mouseY>height/10*7 && mouseIsPressed && mouseX > width/2-width/10*3 && mouseX < width/2+width/10*3){
      muerto=true;
    }
  } else{
    xballmalo+=bvel;
  }
  
  imageMode(CENTER);
  image(wow,xball,yball);
  
  imageMode(CENTER);
  image(img2,xballmalo,yballmalo);
  
  imageMode(CENTER);
  image(img3,xrep,yrep);
  
  if(mouseIsPressed){
    fx=mouseX;
    fy=mouseY;
   imageMode(CENTER);
   img4.resize(200,200);
   image(img4,fx,fy);
   } else {
     fx=width*2;
     fy=0;
     image(img4,fx,fy);
   }
  
  //fill(255);
  //ellipse(mouseX,mouseY,150,150);
  stroke(255);
  strokeWeight(2);
  fill(0);
  rect(width-400,0,50,50);
  rect(width-475,0,50,50);
  rect(width-550,0,50,50);
  rect(width-625,0,50,50);
  rect(width-700,0,50,50);

  if(mouseX>=width-700 && mouseX<=width-650 && mouseY<=50 && mouseIsPressed){
    sound=0;
    song.setVolume(0);
    lol.setVolume(0);
  }
  if(mouseX>=width-625 && mouseX<=width-575 && mouseY<=50 && mouseIsPressed){
    sound=1;
    song.setVolume(0.1);
    lol.setVolume(0.1);
  }
  if(mouseX>=width-550 && mouseX<=width-500 && mouseY<=50 && mouseIsPressed){
    sound=2;
    song.setVolume(1);
    lol.setVolume(1);
  }
  if(mouseX>=width-475 && mouseX<=width-425 && mouseY<=50 && mouseIsPressed){
    sound=3;
    song.setVolume(5);
    lol.setVolume(5);
  }
  if(mouseX>=width-400 && mouseX<=width-350 && mouseY<=50 && mouseIsPressed){
    sound=4;
    song.setVolume(324376);
    lol.setVolume(3132456);
  }
  if(sound==0){
    imageMode(CORNER);
    s0.resize(35,45);
    image(s0,width-692,2.5);
  }if(sound==1){
    imageMode(CORNER);
    s1.resize(35,45);
    image(s1,width-617,2.5);
  }if(sound==2){
    imageMode(CORNER);
    s2.resize(35,45);
    image(s2,width-542,2.5);
  }if(sound==3){
    imageMode(CORNER);
    s3.resize(35,45);
    image(s3,width-467,2.5);
  }if(sound==4){
    imageMode(CORNER);
    s4.resize(35,45);
    image(s4,width-392,2.5);
  }

  fill(255);
  textSize(30);
  text("Sound Level",width-800,25);
  text("Full Screen",160,25);

  stroke(255);
  strokeWeight(2);
  fill(0);
  rect(width-110,0,50,50);
  if(mouseX>=width-110 && mouseY<=50 && mouseIsPressed){
    sioq=0;
  }
  
  stroke(255);
  strokeWeight(2);
  fill(0);
  rect(width-50,0,50,50);
  if(mouseX>=width-50 && mouseY<=50 && mouseIsPressed){
    sioq=1;
  }
  
  if(sioq==0){
    imageMode(CORNER);
    img6.resize(35,45);
    image(img6,width-102,2.5);
  }else{
    imageMode(CORNER);
    img5.resize(35,45);
    image(img5,width-42,2.5);
  } 
  if(mouseX>width/10-30){
    pos1=true;
  }else{
    pos1=false;
  }
  
  if(mouseX<width/10+50+30){
    pos2=true;
  }else{
    pos2=false;
  }
  
  if(mouseY>width/10-30){
    pos3=true;
  }else{
    pos3=false;
  }
  
  if(mouseY<width/10+50+30){
    pos4=true;
  }else{
    pos4=false;
  }
  
  if(mouseX>width/10-30 && mouseX<width/10+50+30 && mouseY>width/10-30 && mouseY<width/10+50+30 && pausa2==false){
    pausa1=true;
  }else{
    pausa1=false;
  }
  
  if(pausa1==false){
    bvel=random(dific1,dific2);
    noStroke();
    fill(255);
    rect(width/10,width/10,20,50);
  
    noStroke();
    fill(255);
    rect(width/10+30,width/10,20,50);
  }
  if(pausa1==true){
    noStroke();
    fill(255);
    triangle(width/10,(width/10)-5,width/10,(width/10)+55,(width/10)+50,(width/10)+25);
    bvel=0;
  }
  image(full,10,10);

  if((hour()>=23 && hour()<=24) || hour()<=4 && hour()>=0){
    song.stop();
    lol.stop();
    fill(0);
    rect(-50,-50,2000,2000)
    cursor(HAND);

    fill(255);
    text("What in the actual ass are you doing, you nerd.",width/2,100);

    text("Ain't got nothing better to do than playing this crappy game late at night?",width/2,200);

    text("Get a life",width/2,300);
  }

  if(hour()<=8 && hour()>=5){
    song.stop();
    lol.stop();
    fill(0);
    rect(-50,-50,2000,2000)
    cursor(HAND);

    fill(255);
    text("You actually got up early just to play this game",width/2,100);

    text("Preciate it, bro",width/2,200);
  }
  if(deviceOrientation==LANDSCAPE){
    fill(0);
    rect(-50,-50,2000,2000)
  }
}

function javi(){
  
  
  this.how = function() {
    
    if(sioq>0){
      col1=random(0,255);
      col2=random(0,255);
      col3=random(0,255);
      imageMode(CENTER);
      img5.resize(150,200);
      image(img5,random(0,width),random(0,height));
      showplay1=col1;
      showplay2=col2;
      showplay3=col3;
    } else{
      //background(col1,col2,col3);
      col1=0;
      col2=0;
      col3=0;
      showplay1=show;
      showplay2=show;
      showplay3=show;
      
    }
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 70 && mouseY > 0 && mouseY < 70) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}

function mouseReleased(){
  if(muerto==true){
    xball=0;
    yball=random (height/15,height/15*14);
    xballmalo=0;
    yballmalo=random (height/15,height/15*14);
    xrep=width;
    yrep=random (height/15,height/15*14);
    dific1=5+punt/5;
    dific2=7+punt/5;
    bvel = random(dific1,dific2);
    show=0;
    show2=255;
    punt=0;
    muerto=false;
  }
}