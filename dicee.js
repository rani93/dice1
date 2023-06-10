
var randomNumber1= Math.floor(Math.random()*6)+1;
var a=randomNumber1;

var imagePick= "images/dice"+randomNumber1+".png";

var b=document.querySelectorAll("img")[0];
b.setAttribute("src", imagePick);

var randomNumber2= Math.floor(Math.random()*6)+1;
var d=randomNumber2;

var imagePick2= "images/dice"+randomNumber2+".png";

var c=document.querySelectorAll("img")[1];
c.setAttribute("src", imagePick2);
if(a==d){
    document.querySelector("h1").innerHTML="draw!";
}
else if(a>d){
    document.querySelector("h1").innerHTML="🚩Player1 wins ";
    
}
else{
    document.querySelector("h1").innerHTML="player2 wins🚩 ";
    
}
