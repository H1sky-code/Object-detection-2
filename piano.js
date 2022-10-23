Status = "";
Bedroom_image = "";

function preload(){
    Bedroom_image = loadImage("https://www.chuppspianos.com/wp-content/uploads/2021/04/Steinway-Model-D-Concert-Grand-Piano-272743-CD180-Concert-and-Artist-Grand-Fully-Restored-by-Chupps-Piano-Service.jpg");
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
    object_Detector.detect(Bedroom_image,gotResults);
}

function gotResults(results,error) {
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Bedroom_image,0,0,640,350);
} 