
function RollDice(){
    const dice=document.getElementById("dice").value;
    const dicenumber=document.getElementById("dicenumber");
    const diceimage=document.getElementById("diceimage");
    const values=[];
    const images=[];
    for(let i=1;i<=dice;i++){
            const value=Math.floor(Math.random()*6)+1;
            values.push(value);
            images.push(`<img src="dice-sides/dice-${value}.png" alt="dice-${value}">`);
        }
        dicenumber.textContent=`Sides : ${values.join(", ")}`;
        diceimage.innerHTML=images.join(" ");
        

    }
