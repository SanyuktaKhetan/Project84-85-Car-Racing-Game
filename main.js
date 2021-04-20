canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var car1_width=100;
var car1_height=90;
var car1_img="car1.png";
var car1_x=10;
var car1_y=10;

var car2_width=100;
var car2_height=90;
var car2_img="car2.jfif";
var car2_x=10;
var car2_y=100;

var background_img="Background2.png";

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_img;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
        console.log("up is pressed");
    
    }
    if(keyPressed=="40"){
        down();
        console.log("down is pressed");
    
    }
    if(keyPressed=="37"){
        left();
        console.log("left is pressed");
    
    }
    if(keyPressed=="39"){
        right();
        console.log("right is pressed");  
        }
        if(keyPressed=="87"){
            w();
            console.log("w is pressed");
        
        }
        if(keyPressed=="65"){
            a();
            console.log("a is pressed");
        
        }
        if(keyPressed=="83"){
            s();
            console.log("s is pressed");
        
        }
        if(keyPressed=="68"){
            d();
            console.log("d is pressed");
        
        
    }
}
function up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("when up arrow is pressed,x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("when down arrow is pressed,x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("when left arrow is pressed,x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        console.log("when right arrow is pressed,x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function w(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        console.log("when w arrow is pressed,x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function s(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("when s arrow is pressed,x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function a(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("when a arrow is pressed,x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function d(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        console.log("when d arrow is pressed,x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
    if(car1_x > 700)
	{
		console.log("car1");
		document.getElementById('game_status').innerHTML = "Car 1 Won!!";
	}
	else if(car2_x > 700)
	{
		console.log("car2");
		document.getElementById('game_status').innerHTML = "Car 2 Won!!";
	}

}