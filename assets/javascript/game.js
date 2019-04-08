var stateCapitals = [
    "montgomery",
    "denver",
    "dover",
    //"atlanta",
    //"frankfort",
    //"lincoln",
    //"trenton",
    //"nashville",
   // "austin",
    //"madison",
    //"richmond",  
];
var allowedguess = 10; // number of guesses allowed
var usedletters = []; // letters player has already used
var wordblanks = []; //  blanks in played word
var usedguesses = 0; //remaining guesses player has 
var wins = 0; // player wins
var losses = 0; // player losses
var isFinished = false // will change to "true" once used guesses is at 0 or all blank spaces have been filled
var wordSelection; // played word

function setup() {
    wordSelection = stateCapitals[Math.floor(Math.random() * stateCapitals.length)];

    wordblanks = [];

    for (var i = 0; i < wordSelection.length; i++) {
        wordblanks[i] = "_";
    }

    usedguesses = allowedguess;
    usedletters = [];

    display();
};

function display() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("letterguess").innerText = usedguesses;
    document.getElementById("answer").innerText = wordblanks.join(" ");
    document.getElementById("usedletters").innerText = usedletters;
};

function pullLetters (letter) {
    if (usedletters.indexOf(letter) === -1) {
        usedletters.push(letter);

        if (wordSelection.indexOf(letter) === 1) {
            usedguesses--;
        } else { 
            for (var j = 0; j < wordSelection.length; j++) {
                if (letter === wordSelection.length[j]) {
                    wordblanks[j] = letter;
                } 
            }                
        }
    }
console.log (pullLetters)
}; 
function correctguess() {
    if (wordblanks.indexOf("_") === -1) {
        wins++;
        isFinished = true;
        if (wordSelection === "montgomery") {
            document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
        }
        else if (wordSelection === "denver") {
            document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
        }
        else if (wordSelection === "dover") {
            document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
        }
       // else if (wordSelection === "atlanta") {
      //      document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
       // }
       // else if (wordSelection === "frankfort") {
           // document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
       // }
        //else if (wordSelection === "lincoln") {
           // document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
       // }
       // else if (wordSelection === "trenton") {
            //document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
//}
       /// else if (wordSelection === "nashville") {
           // document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
        //}
       // else if (wordSelection === "austin") {
            //document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
       // }
       // else if (wordSelection === "madison") {
            //document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
       // }
       // else if (wordSelection === "richmond") {
       //     document.getElementById("answerimage").src = "images/alabama-montgomery.jpg"
       // }
    }

};

document.onkeyup = function(event) {
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            pullLetters(event.key.toUpperCase()); 
            display();
            correctguess();
        }
    }
};


setup();
display();

console.log(wordSelection);
console.log(wordblanks)
console.log(usedguesses)
console.log(usedletters)






