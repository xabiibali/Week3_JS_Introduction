/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax




let  myFunction = () => {
  console.log("Function was invoked!");
  };
  
  myFunction();
  
  let anotherFunction = (param) => {
    return param;
  };
  
  anotherFunction("Example");
  
  
  
  let add = (param1, param2) => {
    return param1 + param2;
  };
  
  add(1,2);
  
  
  
  
  
  /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
  
  /*
  Create a global variable that randomly generates the computer's choice
  Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
  HINT: While you can complete this with only conditionals based on strings,
   it may help to equate choice to a number when using Math.random()
  Use the game function below to do the following:
    1. Receive 2 parameters the user's choice and the computer's choice
    2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
     - win should return "you win!"
     - lose should return "you lose!"
     - tie should return "it's a tie"
    
    RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
    
    HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
  */
  
  
  let  comChoice;
  
  comChoice = Math.round();
  if(comChoice < 0.31){
    comChoice = 'rock'
  } else if(comChoice < 0.59){
    comChoice = 'paper'
  }else {
    comChoice = 'scissors'
  }
  
  function game(user, comChoice){
      /*add your code here*/
     if(user === 'rock'){
      if(comChoice === 'rock'){
        return "it's a tie"
      }else if(comChoice === 'paper'){
        return 'you lose!';
      }else{
        return 'you win !'
      }
     } else if (user === 'paper'){
      if(comChoice === 'rock') {
        return 'you win !'
      }else if(comChoice === 'paper'){
        return "it's a tie "
      }else{
        return 'you lose !'
      }
     }else {
      if (comChoice === 'rock'){
        return 'you lose !'
      } else if(comChoice === 'paper'){
        return 'you win'
      }else{
        return "it's a tie !"
      }
     }
    }
  
  const natiijo = game('rock', comChoice)
  
  console.log(natiijo);
  
  
  
  