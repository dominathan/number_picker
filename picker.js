/* CHANGE ALL IMAGES TO BILL MURRAY */
var img = document.getElementsByTagName('img');
for(var i=0; i<img.length; i++) {
  img[i].src = 'https://www.placecage.com/200/300'
}



// End billmurray

  console.log("Hello from picker.js");

  var lowest = 1;
  var highest = 1000;
  var userAnswer;
  var guess;

$('button[name="guess"]').on('click', function() {
  getUserNumber();

})

  function getUserNumber() {
    userAnswer = $('#first-number').val();
    console.log(userAnswer);
    return parseInt(userAnswer);
  }

  getUserNumber();
  // var higherOrLower = confirm('Is it higher or lower')


  function isHigher() {
    guess = Math.floor((lowest + highest)/2);
    console.log(guess);
    lowest = guess;
    guess = lowest;
  }

  function isLower() {
    guess = Math.floor((lowest + highest) / 2)
    console.log(guess);
    highest = guess;
    guess = highest;
  }
