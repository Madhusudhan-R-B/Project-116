noseX = 0;
noseY = 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/HxN3Kjc2/mustache.png');
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center;
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialised!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x + 20;
        noseY = results[0].pose.nose.y + 15;
    }
}

function draw(){
    image(video,0,0,440,330);
    image(mustache, noseX, noseY, 100, 40);
}

function snap(){
    
}