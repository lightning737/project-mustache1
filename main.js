function setup(){
    Canvas=createCanvas(300,300);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
}

function draw(){
    image(video, 0 ,0 ,300 ,300 );
}