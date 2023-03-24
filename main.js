function preload(){

}
function setup(){
    canvas = createCanvas(340,340);
    canvas.center();
    canvas.background("white");
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video ,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
image(video, 0,0, 340 ,340);
}
function saveImage(){
    
}
function modelLoaded(){
    console.log("Model has been loaded correctly");
}
function gotPoses(results){
    console.log(results);
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("X coordinate of the nose"+noseX);
        console.log("Y coordinate of the nose"+noseY);
    }
}
