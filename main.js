function preload(){
    ""
}
let c = " "

function setup(){
    canvas= createCanvas( 500, 400 );
    canvas.position( 100, 400);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,90,80,300,300);
    circle(80,30,50);
    circle(400,30,50)
    circle(80,400,50)
    circle(400,400,50)
    let c = color('#32CD32')
    fill(c);
    noStroke();
    fill(0, 0, 128);
    stroke(0, 0, 128);
    rect(82,30,300,20);
    rect(80,390,300,20);
    rect(68,25,20,400)
    rect(396,25,20,400)

}

function take_snapshot(){
    save('welcome.png');
}