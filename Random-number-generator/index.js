const min=document.getElementById("min");
const max=document.getElementById("max");
const gen=document.getElementById("gen");
const reset=document.getElementById("reset");
const random=document.getElementById("random");
let value;

gen.onclick=function(){
    
const minval=Number(min.value);
const maxval=Number(max.value);
if( min.value === "" || 
    max.value === "" || maxval<=minval || 
    isNaN(minval) ||
     isNaN(maxval) ){
    alert("Please Enter valid numbers");
    min.value="";
    max.value="";
    random.textContent="Click the button to generate";
    return;

}
    value=Math.floor(Math.random() * (maxval - minval + 1)) + minval;
    random.textContent=value;
}
reset.onclick=function(){
    min.value="";
    max.value="";
    random.textContent="Click the button to generate";
}