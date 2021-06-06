var myDiv = document.getElementById("myDiv")
var myDiv1 = document.getElementById("myDiv")
var myDiv2 = document.getElementById("myDiv")
var myDiv3 = document.getElementById("myDiv")
var myDiv4 = document.getElementById("myDiv")


if (myDiv.style.backgroundColor != ("black")){ 
    myDiv.style.backgroundColor =  ("black")
}

function myFunction() {
    this.style.background ="purple";
}

myDiv.addEventListener("mouseover", function(){myDiv.style.background = "green"});
myDiv1.addEventListener("mousedown", function(){myDiv1.style.background = "yellow"});
myDiv2.addEventListener("mouseup", function(){myDiv2.style.background = "blue"});
myDiv3.addEventListener("dblclick", function(){myDiv3.style.background = "red"});
myDiv4.addEventListener("wheel", myFunction);

document.addEventListener("keydown", function(event){
   if (this.addEventListener.keyup = 82){
    myDiv.style.background = "red";    
   }   
})
