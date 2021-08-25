Webcam.set({
    height: 300,
    width: 400,
    image_format: "jpeg",
    image_quality: 90
});
var camera = document.getElementById("cam_display");
Webcam.attach("#cam_display");
function Capture(){
Webcam.snap(function (data_uri){
    document.getElementById("image_display").innerHTML = '<img id="image" src="'+ data_uri +'"</img>'
});
}
console.log(ml5.version)
var classifier = ml5.ImageClassifier("https://teachablemachine.withgoogle.com/models/XAdrn0yB3/model.jSON",modelLoaded);

function modelLoaded(){
   console.log("Model is Loaded");
}