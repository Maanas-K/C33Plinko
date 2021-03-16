
function showGrid(){
for(var x=0;x<width;x=x+50)
    {  stroke("black")
       strokeWeight("0.5")
        
        line(x,0,x,height);
    }
    for(var y=0;y<height;y=y+50)
    {  stroke("black")
       strokeWeight("0.5")
        
        line(0,y,width,y);
        textSize(20);
    text ("x: "+mouseX+" "+"y: "+mouseY,mouseX,mouseY);  
       
    }
}
