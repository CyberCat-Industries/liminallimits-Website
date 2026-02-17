// Set the date we're counting down to
var countDownDate2 = new Date("March 17, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate2 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  var displayElement = document.getElementById("timer2");
  
  if (displayElement) {
      displayElement.innerHTML = "It will be out very soon!";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    if (displayElement) {
        displayElement.innerHTML = "_____ is out now on bandcamp! Give it a <a href=\"https://liminallimits.com/listen\">listen</a>.";
    }
  }
}, 1000);