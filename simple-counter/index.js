let count=0;


document.getElementById("inc").onclick =function(){
    count++;
    document.getElementById("heading").textContent=count;
}
document.getElementById("dec").onclick=function(){
    count--;
    document.getElementById("heading").textContent=count;
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("heading").textContent=count;
}