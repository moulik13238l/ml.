noseX =0;
noseY =0;
difference =0;
rightWristX =0;
leftWristX =0;

function setup(){
    video = createCapture(VIDEO);
    video.size (550, 500);
   
    canvas = createCanvas(550 , 550);
    canvas.position(560 , 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#808080');

    document.getElementById("square_side").innerHTML = "WIDTH AND HEIGHT OF THE SQUARE WILL BE = " + difference +"px";
    fill('#00FFFF');
    textSize(difference);
    text('MOULIK ', 50, 60)
   
    
}

function modelLoaded() {
    console.log('POSENET IS INITIALIZED ! ');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
   
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor( leftWristX - rightWristX);
 
        console.log("leftWristX" + leftWristX + "rightWristX" + rightWristX + "difference" + difference);
    }
}