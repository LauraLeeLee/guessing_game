
 document.getElementById('submit-input').addEventListener('click', function() {
    let userName = document.getElementById('name-input').value;
    console.table(userName);

    if(userName) {
       let helloName = document.createElement('H2');
       helloName.innerHTML = 'Welcome to Guessing Game ' + userName;
       helloName.classList.add('hello-name');
       helloName.setAttribute('id', 'hello-name');
       document.body.appendChild(helloName);

      document.getElementById('input-div').classList.toggle('hide-inputs');

      let chooseGameDiv = document.createElement('DIV');
          chooseGameDiv.classList.add('choose-game');
          chooseGameDiv.setAttribute('id', 'choose-game');
      document.body.appendChild(chooseGameDiv);

      let guessGameBtn = document.createElement('button');
          guessGameBtn.classList.add('guess-btn', 'button');
          guessGameBtn.setAttribute('id', 'guess-btn');
          guessGameBtn.innerHTML = 'Play Guessing Game';
      chooseGameDiv.appendChild(guessGameBtn);

      let reverseGameBtn = document.createElement('button');
          reverseGameBtn.classList.add('reverse-btn', 'button');
          reverseGameBtn.setAttribute('id', 'reverse-btn');
          reverseGameBtn.innerHTML = 'Play Reverse Guessing Game';
     chooseGameDiv.appendChild(reverseGameBtn);

      let exitBtn = document.createElement('button');
          exitBtn.classList.add('exit-btn', 'button' );
          exitBtn.setAttribute('id', 'exit-btn');
          exitBtn.innerHTML = 'Exit from all games to play';
     chooseGameDiv.appendChild(exitBtn);
    }
});