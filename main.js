rightWristX = 0;
leftWristX = 0;

function setup(){
    canvas = createCanvas(550,550);
    canvas.position(580,150);
    video = createCapture(VIDEO);
    video.size(500, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
}
}

function draw(){
    background('#FF0000');
    textSize(difference);
    Fill('#A020F0');
    text('Prachi', 50, 100);
    
}