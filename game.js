//variable to store list of guessed numbers
let guesses = [];

//variable to store the correct random number
let correctNumber = getRandomNumber();

//function to pick buttons when page is loaded
window.onload = function() {

    document.getElementById("numberSubmit").addEventListener("click", playGame);
    document.getElementById("restartGame").addEventListener("click", initGame);
    
}

// function to accept the value the guessed number / display the result/save the guess history and display the history
function playGame() {
    
    //console.log(correctNumber);
    let numGuess = document.getElementById("numberGuess").value;
    displayResult(numGuess);
    saveGuessHistory(numGuess);
    dispHistory();

}

//function to display the final result
function displayResult(numGuess){

    if(numGuess > correctNumber) {
        document.getElementById("finalPrompt").innerHTML = "The number is too high";
        document.getElementById("finalPrompt").style.color = "red";
    }else if(numGuess < correctNumber){
        document.getElementById("finalPrompt").innerHTML = "The number is too low";
        document.getElementById("finalPrompt").style.color = "powderblue";
    }else if(numGuess == correctNumber){
        document.getElementById("finalPrompt").innerHTML = "You Won";
        document.getElementById("finalPrompt").style.color = "green";
    }

}

//function to reset the fields and history list
function initGame(){

    correctNumber = getRandomNumber();
    document.getElementById("finalPrompt").innerHTML = "";
    document.getElementById("numberGuess").value = "";
    guesses = [];
    dispHistory(); 
}

//function to generate random number for comparism
function getRandomNumber(){

let randNumber = Math.random();
let wholeNumber = Math.floor(randNumber * 100) + 1;
return wholeNumber;

}

 // function to save guess history 
function saveGuessHistory(guess){

    guesses.push(guess); 
    console.log(guesses);
    
}

// function to display the guess history in a list 
function dispHistory(){

    let index = guesses.length - 1;
    let list = "<ul>"
    while(index >= 0){
     list += "<li>" +
     "You guessed" + guesses[index] + "</li>";
     index-=1;
    }
    list += "</ul>";
    document.getElementById("history").innerHTML = list;
}