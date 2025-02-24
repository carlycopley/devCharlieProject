$(document).ready(function(){
  $("#easterEgg button").on("click", function() {
    // Check if the GIF already exists to avoid duplicates
    if ($(".easter-gif").length === 0) {
      $("body").append('<img class="easter-gif" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG5pZGxtaTUxczd4aHU1bWdkcDRjd2VoaGJmcm4xanI3Z2V0YWJjOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qt7bBGJ8x7ZRu/giphy.gif" alt="Surprise GIF">');
    }

    myMove(); // Start moving the GIF smoothly
  });
});

function myMove() {
  var elem = document.querySelector(".easter-gif"); // Select the GIF
  elem.style.position = "fixed"; // Use fixed positioning to keep it on screen
  elem.style.transition = "top 1s linear, left 1s linear"; // Smooth transition

  function moveSmoothly() {
    var maxX = window.innerWidth - elem.clientWidth;
    var maxY = window.innerHeight - elem.clientHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    elem.style.left = randomX + "px";
    elem.style.top = randomY + "px";

    setTimeout(moveSmoothly, 1000); // Move to a new position every second
  }

  moveSmoothly(); // Start movement
}