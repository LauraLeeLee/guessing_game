let chooseGameDiv = document.getElementById('choose-game');
let normalGameBtn = document.getElementById('normal-guess-btn');
let reverseGameBtn = document.getElementById('reverse-btn');
let exitBtn = document.getElementById('exit-btn');
let playAgain = document.getElementById('play-again');
let helloName = document.getElementById('hello-name');

let normalGameDiv = document.getElementById('normal-game');

let minRangeInput = document.getElementById('min-input');
let minValue;

let maxRangeInput = document.getElementById('max-input');
let maxValue;

let userGuess = document.getElementById('user-guess');
let guessValue;

let guessResponseDiv = document.getElementById('response-div');
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

function getMaxRangeInput() {
	maxRangeInput.addEventListener('input', function() {
		maxValue = parseInt(maxRangeInput.value);
		minMaxRange(minValue, maxValue);
		console.log(maxRangeInput.value);
	});
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

function playGameAgain() {
	document.getElementById('min-max-div').style.display = 'block';
		document.getElementById('input-div3').style.display = 'none';
		document.getElementById('gen-random').style.display = 'inline-block';
		minRangeInput.value = '';
		maxRangeInput.value = '';
		userGuess.value = '';
		guessResponse.innerHTML = '';
		numbersGuessed = [];
		randomNum = '';
		guessResponseDiv.style.display = 'none';
		playAgain.style.display = 'none';
		exitBtn.style.display = 'none';
}

function normalGame() {
	console.log('guess game button clicked');
		normalGameDiv.style.display = 'block';
		chooseGameDiv.style.display = 'none';

		getMinRangeInput();
		getMaxRangeInput();


		document.getElementById('gen-random').addEventListener('click', function(){
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
		}); 
	
		userGuess.addEventListener('input', function() {	
		
			guessResponseDiv.style.display = 'block';		 
			guessValue = parseInt(userGuess.value);
			console.log(typeof(minValue), minValue, typeof(maxValue), maxValue, typeof(guessValue), guessValue);

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
				guessResponseDiv.style.display = 'block';
				guessResponse.innerHTML = 'YOU GUESSED IT!  The number was ' 
											+ randomNum + ' You guess it in ' 
											+ numbersGuessed.length  + ' guesses.  The numbers you guessed are '
											+ numbersGuessed;
				playAgain.style.display = 'inline-block';

						//TODO: make this know which game was played when playAgain
		//was chosen to start the appropriate game
		if(playAgain) {
			playAgain.addEventListener('click', playGameAgain);
		}      
    
		}
			if(guessValue && minValue && maxValue) {
				if((guessValue < minValue) || (guessValue > maxValue)) {
					guessResponse.innerHTML = "please make guess beteween " + 
									minValue + " and " + maxValue;
				} 
			}
	
		}); //end of userGuess event
}//end of normalGame

 document.getElementById('submit-input').addEventListener('click', function() {
	let userName = document.getElementById('name-input').value;
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
	
});
 
