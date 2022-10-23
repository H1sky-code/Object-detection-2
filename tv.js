Status = "";
TV_image = "";

function preload(){
    TV_image = loadImage("https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200");
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
    object_Detector.detect(TV_image,gotResults);
}

function gotResults(results,error) {
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(TV_image,0,0,640,350);
} 