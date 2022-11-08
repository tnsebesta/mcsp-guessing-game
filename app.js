let person = {};

play(); 

function play() {

    const secretNum = Math.floor(Math.random() * 10) + 1;
    let count = 1;
    let guesses = [];
    const name = prompt('What is your name?');

    while (true) {

        if (name === null) {
            error();
            break; }

        const guess = prompt("Guess a number");

        if (guess === null) {
            error();
            break; }
        
        const guessNum = Number(guess);

        if (Number.isNaN(guessNum)) {
            window.alert("Please enter a valid number"); }
        
        else if (guessNum > secretNum) {
            window.alert("Sorry " + name + " , Guess Lower");
            count++;
            guesses.push(" "+guessNum); }

        else if (guessNum < secretNum) {
            window.alert("Sorry " + name + " , Guess Higher");
            count++;
            guesses.push(" "+guessNum); }

        else {
            if (person.hasOwnProperty(name) !== true) {
                person[name] = count;
                const playAlso = prompt("That's Correct " + name + "! It only took you "  + count + " tries! Would you like to play again?");

                if (playAlso.toLowerCase() === "yes") {
                    play();
                    break; }
                else {
                    break; }

             } else if (person.hasOwnProperty(name) === true) {
                let oldCount = person[name];
                person[name] = count;

                if (oldCount > count) {
                const playAlso = prompt("That’s Correct " + name + "! And you beat your previous attempt by " + (oldCount - count) + "! Would you like to play again?");

                    if (playAlso.toLowerCase() === "yes") {
                        play();
                        break; } 
                    else {
                    break; }

                } else if ( oldCount < count ) {
                    const playAlso = prompt("That’s Correct " + name + "! You did better in your last game by " + Math.abs(oldCount - count) + " fewer guess(es) Would you like to play again?");

                    if (playAlso.toLowerCase() === "yes") {
                        play();
                        break; }
                    else {
                        break; }
                } else {
                    const playAlso = prompt('That is Correct ${name}! You tied your previous attempt! Would you like to play again?');

                    if (playAlso.toLowerCase() === "yes") {
                        play();
                        break; }
                    else {
                        break; }

                }
            }
        }
    }
}
function error() {
    window.alert("Goodbye");
}

