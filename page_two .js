img="";
status="";
objects=[];


function preload(){
    img=loadImage('3.jpg');
    
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}

function draw(){
    image(img,0,0,640,420)
    if(status!=""){
        
            document.getElementById("status").innerHTML=" Detection in Progress...";
            fill("#E74C3C ");
          
            text("Dog"+ " "+"80% ", 45,75);
            noFill();
            stroke("#E74C3C  ");
            rect(30, 60, 450,350);

          fill("#76D7C4 ");
            
            text("Cat"+ " "+"80% ", 320,120);
            noFill();
            stroke("#76D7C4 ");
            rect(300, 90, 270,320);
            document.getElementById("status").innerHTML=" Detection Completed!";
        
    }
}

function modelLoaded(){
    console.log("Model is Loaded!");
    status=true;
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}