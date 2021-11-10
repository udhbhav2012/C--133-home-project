img="";
status="";
objects=[];


function preload(){
    img=loadImage('new.jpg');
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}

function draw(){
    image(img,0,0,640,420)
    if(status!=""){
        for(i=0;i<objects.length; i++){
            document.getElementById("status").innerHTML=" Detection in Progress...";
            fill("#8E44AD ");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+ " "+percent+"% ", objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#8E44AD ");
            rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height);
            document.getElementById("status").innerHTML=" Detection Completed!";
        }
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