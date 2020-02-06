let chooseGameDiv = document.getElementById('choose-game');
let normalGameBtn = document.getElementById('normal-guess-btn');
let reverseGameBtn = document.getElementById('reverse-btn');
let exitBtn = document.getElementById('exit-btn');
let nextBtn = document.getElementById('next-btn');
let playAgain = document.getElementById('play-again');
let helloName = document.getElementById('hello-name');
let userName = '';
let normalGameDiv = document.getElementById('normal-game');
let reverseGameDiv = document.getElementById('reverse-game');
let buttonsDiv = document.getElementById('button-div');

let normalMinMaxDiv = document.getElementById('normal-game-min-max');
let reverseMinMaxDiv = document.getElementById('reverse-game-min-max');

let minMaxInputs = '<div id="min-max-div" class="min-max-div">' +
											'<div id="input-div1" class="input-div1">' +
													'Min Number: <input id="min-input" class="min-input range-input input game-input" type="number" min="0">' +
								  			'</div>' +
                				'<div id="input-div2" class="input-div2">' + 
													'Max Number: <input id="max-input" class="max-input range-input input game-input" type="number">' +  
												'</div>'+
										'</div>';
let minMaxDiv;
let minRangeInput;
let maxRangeInput;
let yesBtn = '<button id="yes-btn" class="yes-btn button">Yes</button>';
let noHighBtn = '<button id="no-btn-high" class="no-btn-high button">No too high</button>';
let noLowBtn = '<button id="no-btn-low" class="no-btn-low button">No too low</button>';

function getInputElements() {
	if(minMaxInputs) { 
		minMaxDiv = document.getElementById('min-max-div');
		minRangeInput = document.getElementById('min-input');
		maxRangeInput = document.getElementById('max-input');
	}
}
let minValue;
let maxValue;

let gameRuleTitle = document.getElementById('game-rule');
// let userGuessDiv = document.getElementById('input-div3');
let userGuess = document.getElementById('user-guess');
let guessValue;

let guessResponseDiv = document.getElementById('response-div');
let endTitle = document.getElementById('end-title');
let guessResponse = document.getElementById('guess-response');
let guessResponse2 = document.getElementById('guess-response2');
let guessResponse3 = document.getElementById('guess-response3');
let randomNum;
let oldRandom;

let guessCommand = document.getElementById('guess-command');
let reverseInstruction;

let numbersGuessed = [];
let maxNumGuesses = 2;

let beginGuess = document.getElementById('gen-random');
let timeout = null;

function generateRandomNum(min, max) {
	randomNum = Math.floor(Math.random() * (max - min + 1) + min);
	if(numbersGuessed.includes(randomNum) === false) {
		oldRandom = randomNum;
	} else {
		Math.floor(Math.random() * (max - min + 1) + min);
	}
	
}

function computerGuessAgainHigher() {
	 //
	minValue = oldRandom + 1;
	console.log("oldRandom", oldRandom, "minValue", minValue, "maxValue", maxValue);
	generateRandomNum(minValue, maxValue);
	console.log(randomNum, "in guessHigher");
	if(randomNum === oldRandom) {
	}
	if(numbersGuessed.includes(randomNum) === false){
		numbersGuessed.push(randomNum);
		guessResponse2.textContent = "Is your number " + randomNum + " ?";
	} else{
		generateRandomNum(minValue, maxValue);	
		console.log("number already guessed- in guessHigher");
		console.log("random in computerGuess", randomNum);
	}
	checkGuessInRange(minValue, maxValue);
	console.log("randomNum", randomNum);
	console.log("numbersGuessed(too low): ", numbersGuessed.join(", "));
}


function computerGuessAgainLower() {
	maxValue = oldRandom - 1;
	console.log("oldRandom:", oldRandom, "minValue:", minValue, "maxValue:", maxValue);
	generateRandomNum(minValue, maxValue);
	console.log(randomNum, "in guessLower");
	if(randomNum === oldRandom) {
	}
	if(numbersGuessed.includes(randomNum) === false){
		numbersGuessed.push(randomNum);
		guessResponse2.textContent = "Is your number " + randomNum + " ?";
	} else {
		generateRandomNum(minValue, maxValue);
		console.log("number already guessed- in guessLower");
		console.log("random in computerGuess", randomNum);
	}
	checkGuessInRange(minValue, maxValue);
console.log("randomNum: ", randomNum);
console.log("numbersGuessed(too high): ", numbersGuessed.join(", "));	
}

function checkGuessInRange(min, max) {
	let guessArray = "The numbers I guessed are: " + numbersGuessed.join(', ');
	if(min === max) {
		guessResponse.textContent = "Excuse me, this isn't possible, we've made an error somewhere";
		guessResponse2.textContent = guessArray;
	}
	if(min - max === 1) {
		guessResponse.textContent = "Hello?? Are you cheating? The minValue is " + minValue + " and the maxValue is " + maxValue;
		guessResponse2.textContent = guessArray;
	}
}

// setTimeout allows delay for user to be done typing before extracting value of input
	function getMinRangeInput(){
		if(minRangeInput){
			minRangeInput.onkeyup = function(e) {
				clearTimeout(timeout);
				timeout = setTimeout(function () { 
					console.log(minRangeInput.value);	 
					minValue = parseInt(minRangeInput.value);	
				}, 600);	
			}
	  }
	}


function getMaxRangeInput() {
	if(maxRangeInput) {
	maxRangeInput.onkeyup =  function(e) {
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			maxValue = parseInt(maxRangeInput.value);
			minMaxRange(minValue, maxValue);
			console.log(maxRangeInput.value);
		}, 600);
	}
}
}

function minMaxRange(min, max) {
	if(min && max) {
		if((max - min) < 10) {
			console.log('max- min <10');
			maxRangeInput.value = '';
			alert("Min and Max need to have a range of at least 10");
		}
	}
}

// play game again
function playGameAgain() {
	// location.reload();
	document.getElementById('min-max-div').style.display = 'block';
	document.getElementById('input-div3').style.display = 'none';
	document.getElementById('gen-random').style.display = 'inline-block';
	buttonsDiv.style.display = 'none';

	minRangeInput.value = '';
	maxRangeInput.value = '';
	userGuess.value = '';
	guessResponse.textContent = '';
	numbersGuessed = [];
	randomNum = '';
	endTitle.innerHTML = ''; 
	guessResponse2.innerHTML = '';
	guessResponse3.innerHTML = '';
	guessResponseDiv.style.display = 'none';
	playAgain.style.display = 'none';
	// exitBtn.style.display = 'none';
	normalGame();
	console.log('min: ' + minRangeInput.value, 'max: ' + maxRangeInput.value, 
						'guess: ' + userGuess.value, 
						 'numsGsd: ' + numbersGuessed.length, 
						 'random: ' + randomNum);
}

//Runs when normal game is chosen
function normalGame() {
	console.log('guess game button clicked');
	normalGameDiv.style.display = 'block';
	let checkForDiv = document.getElementById('min-max-div');
	if(!checkForDiv) {
	normalGameDiv.insertAdjacentHTML("beforeEnd", minMaxInputs);
	}
	// normalGameDiv.insertAdjacentHTML("beforeEnd", minMaxInputs);
	getInputElements();
	chooseGameDiv.style.display = 'none';
	// minMaxDiv.style.display = 'block';
	buttonsDiv.style.display = 'block';
	// reverseStartBtn.style.display = 'none';
	getMinRangeInput();
	getMaxRangeInput();

	console.log("max guesses :", maxNumGuesses);

 if(!gameRuleTitle.textContent.includes(maxNumGuesses)) {
	gameRuleTitle.textContent += maxNumGuesses;
 }	
// gameRuleTitle.textContent += maxNumGuesses;

	beginGuess.addEventListener('click', function() {
		console.log('minVal ' + minValue + ' maxVal ' + maxValue);
		if(!minValue || !maxValue) {
			alert('Please enter min and max values');
		}	else {
			minMaxRange(minValue, maxValue);

			document.getElementById('min-max-div').style.display = 'none';
			document.getElementById('input-div3').style.display = 'block';
			document.getElementById('gen-random').style.display = 'none';
			generateRandomNum(minValue, maxValue);
			console.log('random: ', randomNum);	
		}//end of else 
	}); //end of beginGuess

//Code to run when user makes guess
console.log("userGuess: ", userGuess);
		userGuess.addEventListener("keyup", function() {
		console.log('user guessed');
			clearTimeout(timeout);

			timeout = setTimeout(function() { 	
			guessResponseDiv.style.display = 'block';		 
			guessValue = parseInt(userGuess.value);
			numbersGuessed.push(guessValue);
			console.log(typeof(minValue), minValue, typeof(maxValue), maxValue, typeof(guessValue), guessValue);
		
			if(guessValue > randomNum) {
				guessResponse.textContent = 'Guess lower';
			}
			if(guessValue < randomNum) {
				guessResponse.innerHTML = 'Guess higher';
			}
			if(guessValue === randomNum) {
				// guessResponseDiv.style.display = 'block';
				endTitle.innerHTML = 'YOU WON! ';
				guessResponse.innerHTML = 'The number was ' + randomNum;
				guessResponse2.innerHTML = 'It took you ' + numbersGuessed.length  + ' guesses.';  
				guessResponse3.innerHTML = 'The numbers you guessed are ' + numbersGuessed.join(', ');
				playAgain.style.display = 'inline-block';
				console.log('you win!');
			}
			if((numbersGuessed.length == maxNumGuesses) && (guessValue !== randomNum)) {
				endTitle.innerHTML = 'YOU LOSE!'; 
				guessResponse2.innerHTML = 'Sorry ' + userName +  ' you didn\'t guess within ' + maxNumGuesses + ' guesses.';
				guessResponse.innerHTML = 'The number was ' + randomNum;
				guessResponse3.innerHTML = 'Here\'s your list of guesses: ' + numbersGuessed.join(', ');
				playAgain.style.display = 'inline-block';
				exitBtn.style.display = 'inline-block';
				console.log('you lose!');
			}
		if(guessValue && minValue && maxValue) {
			if((guessValue < minValue) || (guessValue > maxValue)) {
				guessResponse.innerHTML = "please make guess beteween " + 
								minValue + " and " + maxValue;
			} 
		}

		//TODO: make this know which game was played when playAgain
		//was chosen to start the appropriate game
		if(playAgain) {
			playAgain.addEventListener('click', playGameAgain);
		}  
	}, 600); //end of userGuess event
 });
}//end of normalGame


function getUserGuess() {	
	console.log('user guessed');
	let userGuess = document.getElementById('user-guess');
	console.log("userGuess: ", userGuess.value);
}

//Reverse game
function reverseGame() {
	console.log('reverse game clicked');
  reverseGameDiv.style.display = 'block';
	chooseGameDiv.style.display = 'none';
	buttonsDiv.style.display = 'block';

	let checkForDiv = document.getElementById('min-max-div');
	if(!checkForDiv) {
	reverseMinMaxDiv.insertAdjacentHTML("beforeEnd", minMaxInputs);
	}
	getInputElements();
	getMinRangeInput();
	getMaxRangeInput();

	console.log("max guesses :", maxNumGuesses);
	if(!gameRuleTitle.textContent.includes(maxNumGuesses)) {
		gameRuleTitle.textContent += maxNumGuesses;
	 }	
	 
	 beginGuess.addEventListener('click', function() {
		console.log("begin button clicked in reverse game");
		startComputerGuess();
		//===make sure nothing in startComputerGuess is needed in beginGuess
	 });//end beginGuess	
	 
	nextBtn.addEventListener('click', function() {
		buttonsDiv.insertAdjacentHTML("afterBegin", noLowBtn);
		buttonsDiv.insertAdjacentHTML("afterBegin", noHighBtn);
		buttonsDiv.insertAdjacentHTML("afterBegin", yesBtn);
		nextBtn.style.display = 'none';

		let checkInstruction = document.getElementById('reverse-instruction');
		let haveNumber = document.getElementById('have-number');
		if(checkInstruction) {
			checkInstruction.style.display = 'none';
			haveNumber.style.display = 'none';
		}
		generateRandomNum(minValue, maxValue);
		
		console.log('reverse random:', randomNum);
		if(randomNum) {
			numbersGuessed.push(randomNum);
			guessResponseDiv.style.display = 'block';
			guessResponse.textContent = "Is " + randomNum + " your number?";
			
				document.addEventListener('click', function(e){
					if(e.target && e.target.id == 'yes-btn') {
						yesBtnResponse();
					}
				});

				document.addEventListener('click', function(e){
					if(e.target && e.target.id == 'no-btn-high') {
						noHighResponse();
					}
				});
				document.addEventListener('click', function(e){
					if(e.target && e.target.id == 'no-btn-low') {
						noLowResponse();
					}
				});
	  }//end if randomNum
	});//end nextBtn
}//end reverse game

function yesBtnResponse() {
	console.log("yes button clicked");
	let computerWins = 'YES!! I WON!!! I guessed in ' + numbersGuessed.length +
											"The numbers I guessed are: " + numbersGuessed.join(', ');
	guessResponse2.textContent = computerWins;
	guessResponse.style.display = "none";
	document.getElementById('yes-btn').style.display = "none";
	document.getElementById('no-btn-high').style.display = "none";
	document.getElementById('no-btn-low').style.display = "none";
	playAgain.style.display = "inline-block";
}

function noHighResponse() {
	console.log("no-high button clicked");
	guessResponse.textContent = "Ok, I need to guess lower.....";
	computerGuessAgainLower();
}

function noLowResponse() {
	console.log("no-low button clicked");
	guessResponse.textContent = "Ok, I need to guess higher.....";	
	computerGuessAgainHigher();
}

function startComputerGuess() {
	console.log('minVal ' + minValue + ' maxVal ' + maxValue);
	if(!minValue || !maxValue) {
		alert('Please enter min and max values');
	}	else {
		minMaxRange(minValue, maxValue);
	
		document.getElementById('min-max-div').style.display = 'none';
		document.getElementById('gen-random').style.display = 'none';

		reverseInstruction = '<h2 id="reverse-instruction" class="reverse-instructions">Great! Now think of a number between ' + minValue + ' and ' + maxValue + '</h2>' +
													'<h3 id="have-number" class="have-number">When you have your number, click next';

		reverseGameDiv.insertAdjacentHTML("beforeEnd", reverseInstruction);
		nextBtn.style.display = 'inline-block';
	}	
}

//Runs when user enters name
 document.getElementById('submit-input').addEventListener('click', function() {
	userName = document.getElementById('name-input').value;
    if(userName) {
			helloName.innerHTML += userName;
			chooseGameDiv.style.display = 'block';
      document.getElementById('input-div').classList.toggle('hide-inputs');
    } else {
				alert('Please enter name');
				location.reload();//TODO: why is this needed now? 
    }

    if(exitBtn) {
			exitBtn.addEventListener('click', function() {
				location.reload();
			});
		}

		if(normalGameBtn) {   
			normalGameBtn.addEventListener('click', normalGame);
		} 

		if(reverseGameBtn) {
			reverseGameBtn.addEventListener('click', reverseGame);
		}
	
});