Prediction = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Camera = document.getElementById("Camera");

Webcam.attach("Camera");


function Capture() {
    Webcam.snap(function (DataUrl) {
        document.getElementById("Result").innerHTML = "<img id='CapturedImage' src='" + DataUrl + "'/>";
    });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QXwOhu23R/model.json", ModelLoaded);

function ModelLoaded() {
    console.log("Model Loaded!");
}

function Speak() {
    var Synth = window.speechSynthesis;
    SpeakData = "The prediction is " + Prediction;
    var UtterThis = new SpeechSynthesisUtterance(SpeakData);
    Synth.speak(UtterThis);
}