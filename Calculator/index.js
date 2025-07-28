const display=document.getElementById("display");

function calculate(input){
    display.value+=input;
 
}
function equal(){

    try{
      display.value= eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
}

function RESET(){
    display.value="";
}
function sqrt() {
    if (display.value.trim() === "") return; 
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Error";
    }
}

