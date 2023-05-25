noseX = 0
noseY = 0

function preload(){
stuff = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
canvas =  createCanvas(500, 400)
canvas.position(365, 150)

thing = createCapture(VIDEO)
thing.hide()
umm = ml5.poseNet(thing, modelLoadedhopefully)
umm.on("pose", meh)
}
function modelLoadedhopefully(){
    console.log("Model has Loaded because you have seen this message.")
}
function draw(){
    image(thing, 0, 0, 500, 400)
    image(stuff, noseX -100, noseY-60, 70, 70)
}
function takePic(){
    save("me.png")
}
function meh(results){
    if (results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        
    }
}