console.log(`November 17, 2024`)



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

// Footer
// Get the current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("copyright").innerHTML = `Copyright ${currentYear} janellyyyace. All rights reserved.`;
console.log("You see me! Yey. This is Janel.");
console.log("Today's date is:", currentDate.toString());

 // Loops Assignment
 const olList = document.getElementById("numbers");
 if (olList) {
    for (let i = 1; i <= 12; i++) {
       const listItem = document.createElement("li");

       // Show if the number is odd or even
       listItem.textContent = i % 2 === 0 ? "even" : "odd";
       listItem.classList.add(i % 2 === 0 ? "even" : "odd");

       olList.appendChild(listItem);
    }
 }

