Status = "";
desk_image = "";

function preload(){
    desk_image = loadImage("https://mobileimages.lowes.com/productimages/e44eb082-2d11-480e-8ea1-501f083b3d03/42477213.jpg?size=xl");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(desk_image,gotResults);
}

function gotResults(results,error) {
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(desk_image,0,0,640,350);
} 