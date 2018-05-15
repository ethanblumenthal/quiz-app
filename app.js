let count = 0;
let score = 0;

function renderQuestion() {
  $('.questionSpace').html(
    `<form>
      <fieldset>
        <legend>
          <h2>${STORE[count].question}</h2>
        </legend>
        
        <label required>
          <input type="radio" name="answer" required >
          <span>${STORE[count].answers[0]}</span>
        </label>

        <label>
          <input type="radio" name="answer" required >
          <span>${STORE[count].answers[1]}</span>
        </label>

        <label>
          <input type="radio" name="answer" required >
          <span>${STORE[count].answers[2]}</span>
        </label>

        <label>
          <input type="radio" name="answer" required >
          <span>${STORE[count].answers[3]}</span>
        </label>
        
        <button type="submit" class="submitButton">Submit</button>
      </fieldset>
    </form>`
  );
}

function renderResults() {
  $('.questionSpace').html(
    `<h2>Congrats!</h2>
    <h3>You got ${score} of 10 questions correct.</h3>
    <button type="button" class="restartButton">Restart</button>`
  );
}

function renderCorrect() {
  $('.questionSpace').html(
    `<h2 class="correct">Correct!</h2>
    <h3>The answer is ${STORE[count].correct}.</h3>
    <button type="button" class="nextButton">Next</button>`
  );
} 

function renderWrong() {
  $('.questionSpace').html(
    `<h2 class="wrong">Sorry!</h2>
    <h3>The answer is ${STORE[count].correct}.</h3>
    <button type="button" class="nextButton">Next</button>`
  ); 
}

function updateCount() {
  count++;
  $('.count').text(count);
}

function updateScore() {
  score++;
  $('.score').text(score);
}

function handleStart() {
  $('.startButton').click(function(evt) {
    updateCount();
    renderQuestion();
  });
}

function handleSubmit() {
  $('.questionSpace').on('submit', 'form', function(evt) {
    evt.preventDefault();
    if ($('input:checked').siblings('span').text() === STORE[count].correct) {
      updateScore();
      renderCorrect();
    } else {
      renderWrong();
    }
  });
}

function handleNext() {
  $('.questionSpace').on('click', '.nextButton', function(evt) {
    if (count === 10) {
      renderResults();
    } else {
      updateCount();
      renderQuestion();
    }
  });
}

function handleRestart() {
  $('.questionSpace').on('click', '.restartButton', function(evt) {
    count = 0;
    score = -1;
    updateCount();
    updateScore();
    renderQuestion();
  });
}

$('document').ready(function() {
  handleStart();
  handleSubmit();
  handleNext();
  handleRestart();
});