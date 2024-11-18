console.log(`November 17, 2024`)

//Page Pop-Up
window.alert(`Welcome to my website`)
window.alert(`Thanks for checking it out!`)


// Dice Roller

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("dicePics");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 20) + 1;
        console.log(value)


        values.push(value);
        images.push(`<img src="dice pics/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(' | ')}`;
    diceImages.innerHTML = images.join('');
}