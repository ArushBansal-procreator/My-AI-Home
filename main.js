
var c = document.getElementById("myCanvas");
console.log("started1");
var ctx = c.getContext("2d");
light_bulb1= new Image();
   light_bulb2= new Image();
   light_bulb1.src= "bulb1.jpg";
   light_bulb2.src= "bulb2.jpg";
   happy_image=new Image();
   happy_image.src="happy.jpg";
   sad_image=new Image();
   sad_image.src="sad.png";

function change(){
   console.log("started");
   
   
   if (document.getElementById("moodinput").value=="happy"){
    ctx.drawImage(light_bulb1,340,280,50,50);
    ctx.drawImage(light_bulb1,370,300,50,50);
    ctx.drawImage(happy_image,80,150,100,150);
    }else if (document.getElementById("moodinput").value=="sad"){
        ctx.drawImage(light_bulb2,340,280,50,50);
        ctx.drawImage(light_bulb2,370,300,50,50);
        ctx.drawImage(sad_image,80,150,150,150);
        }
}