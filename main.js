function setup(){
    var canvas = createCanvas(700,600)
  canvas.center()
  canvas.mouseReleased(classify_can)
synth=window.speechSynthesis
}
function draw(){
    var cl = document.getElementById("cl").value
    var wl = document.getElementById("wl").value
    strokeWeight(wl)
    stroke(cl)
    if(mouseIsPressed){
         line (pmouseX,pmouseY,mouseX,mouseY)
    }
}
function preload(){
 classifier = ml5.imageClassifier("DoodleNet")
}
function classify_can(){
    classifier.classify(canvas,gotResult)
}
function gotResult(e,r){
    if(e){
        console.error(e)
    }else{
        console.log(r)
        document.getElementById("label").innerHTML = "Label: " + r[0].label
        document.getElementById("confidence").innerHTML = "Confidence: " + Math.round(r[0].confidence*100) + " %"
        say = new SpeechSynthesisUtterance(r[0].label)
        synth.speak(say)
    }
}
function clear_canvas(){
    background("white")
}
