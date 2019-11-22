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

				let minValue = minRangeInput.addEventListener('input', function() {
					minRangeInput.value;
					console.log(minRangeInput.value);
				});
		
				let maxValue = maxRangeInput.addEventListener('input', function() {
					maxRangeInput.value;
					console.log(maxRangeInput.value);
				});
		
				let guessValue = userGuess.addEventListener('input', function() {
					 userGuess.value;
					console.log(userGuess.value);
				});

		

				if(guessValue && minValue) {
					console.log("guessValue minVlaue present?");
					if(guessValue < minValue) {
						guessResponse.innerHTML = "please make guess between " + 
										minValue + " and " + maxValue;
										console.log('guess response set');
					} else {
						guessResponse.innerHTML = "where are the numbers?";
						console.log('guess response sort of set');
					}
				}
					
			});
    }       
    
});
 
