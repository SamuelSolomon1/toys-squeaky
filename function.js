var numberOfAnimalButtons = document.querySelectorAll(".toys").length;

for (var i = 0; i < numberOfAnimalButtons; i++) {
  document
    .querySelectorAll(".squaky1")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squaky1 = new Audio("toysSounds/squaky1.mp3");
      squaky1.play();
    });
  document
    .querySelectorAll(".squaky2")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squaky2 = new Audio("toysSounds/squaky2.mp3");
      squaky2.play();
    });
  document
    .querySelectorAll(".squaky3")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squaky3 = new Audio("toysSounds/squaky3.mp3");
      squaky3.play();
    });
  document
    .querySelectorAll(".squaky4")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squaky4 = new Audio("toysSounds/squaky4.mp3");
      squaky4.play();
    });
  document
    .querySelectorAll(".squaky5")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squaky5 = new Audio("toysSounds/squaky5.mp3");
      squaky5.play();
    });
  document
    .querySelectorAll(".squaky6")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squaky6 = new Audio("toysSounds/squaky6.mp3");
      squaky6.play();
    });
}
