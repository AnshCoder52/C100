var SpeechRecognition = window.webkitSpeechRecognition; 

var recognition = new SpeechRecognition();


function Start() {

document.getElementById("textbox").innerHTML = "";
recognition.start();

}

recognition.onresult = function(event) {

console.log(event);

var Content = event.results[0][0].transcript;

document.getElementById("textbox").innerHTML = Content;
console.log(Content);
if(Content == "take my selfie") 
{
console.log("take my selfie")
Speak();

}
}


Webcam.set({
width: 300,
height: 300,
image_format: 'png',
png_quality: 90
});

Camera = document.getElementById("Cam1");
Webcam.attach(Camera);

setTimeout(function(){
take_snapshot();
save();
}, 5000);

function Speak (){
var s = window.speechSynthesis;
var speechData = "taking selfie in 5 seconds";
var utterThis = new SpeechSynthesisUtterance(speechData);
s.speak(utterThis);
}

function take_snapshot() {

Webcam.snap(function(data_uri){

document.getElementById("Cam2").innerHTML = "<img id = 'Result' src = "+data_uri+">"

})


}

function save(){

act_store = document.getElementById("act");
image = document.getElementById("Result").src;

act_store.href = image;
act_store.click();
}