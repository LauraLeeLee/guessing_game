let chooseGameDiv = document.getElementById('choose-game');
let normalGameBtn = document.getElementById('normal-guess-btn');
let reverseGameBtn = document.getElementById('reverse-btn');
let exitBtn = document.getElementById('exit-btn');

let helloName = document.getElementById('hello-name');

let normalGameDiv = document.getElementById('normal-game');

let minRangeInput = document.getElementById('min-input');
let minValue;

let maxRangeInput = document.getElementById('max-input');
let maxValue;

let userGuess = document.getElementById('user-guess');
let guessValue;

let guessResponseDiv = document.createElement('response-div');
let guessResponse = document.getElementById('guess-response');

let randomNum;

let numbersGuessed = [];

function generateRandomNum(min, max) {
	randomNum = Math.floor(Math.random() * (max - min + 1) + min);
}

function getMinRangeInput(){
	minRangeInput.addEventListener('input', function() {
		console.log(minRangeInput.value);	 
		minValue = parseInt(minRangeInput.value);	
	});	
} 

function getMaxRangeInput(callback) {
	maxRangeInput.addEventListener('input', function() {
		maxValue = parseInt(maxRangeInput.value);
		console.log(maxRangeInput.value);
	});
}

 document.getElementById('submit-input').addEventListener('click', function() {
	let userName = document.getElementById('name-input').value;
    if(userName) {
			helloName.innerHTML += userName;
			chooseGameDiv.style.display = 'block';
      document.getElementById('input-div').classList.toggle('hide-inputs');
    } else {
        alert('Please enter name');
    }

    if(exitBtn) {
			exitBtn.addEventListener('click', function() {
				location.reload();
			});
		}
		
		if(normalGameBtn) {   
			normalGameBtn.addEventListener('click', function() {
				console.log('guess game button clicked');
				normalGameDiv.style.display = 'block';
				chooseGameDiv.style.display = 'none';
		

				getMinRangeInput();
				getMaxRangeInput();
				// generateRandomNum(minValue, maxValue);
				// 	console.log('random: ', randomNum);
					//random num is generated before 
					//maxValue is entered
				
				document.getElementById('gen-random').addEventListener('click', function(){
					document.getElementById('min-max-div').style.display = 'none';
					document.getElementById('input-div23').style.display = 'block';
					document.getElementById('gen-random').style.display = 'none';
					generateRandomNum(minValue, maxValue);
					console.log('random: ', randomNum);

				}); //random generated here doesn't allow for
				//comparing in if statement below.
			
				userGuess.addEventListener('input', function() {			 
					guessValue = parseInt(userGuess.value);
					console.log(typeof(minValue), minValue, typeof(maxValue), maxValue, typeof(guessValue), guessValue);
				// 	generateRandomNum(minValue, maxValue);
				// console.log('random: ', randomNum);
				//generateRandomNum here causes new random number
				//to generate on each guess

					if(guessValue > randomNum) {
						guessResponse.innerHTML = 'Guess lower';
						numbersGuessed.push(guessValue);
					}
					if(guessValue < randomNum) {
						guessResponse.innerHTML = 'Guess higher';
						numbersGuessed.push(guessValue);
					
					}
					if(guessValue === randomNum) {
						numbersGuessed.push(guessValue);
						guessResponse.innerHTML = 'YOU GUESSED IT!  The number was ' 
													+ randomNum + ' You guess it in ' 
													+ numbersGuessed.length  + ' guesses.  The numbers you guessed are '
													+ numbersGuessed;
					}

					if(guessValue && minValue && maxValue) {
						if((guessValue < minValue) || (guessValue > maxValue)) {
							guessResponse.innerHTML = "please make guess beteween " + 
											minValue + " and " + maxValue;
						} 
					}
				}); //end of userGuess event
			}); //end of normalGameBtn event
    }       
    
});
 
