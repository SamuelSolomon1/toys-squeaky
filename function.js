var numberOfAnimalButtons = document.querySelectorAll(".toys").length;

for (var i = 0; i < numberOfAnimalButtons; i++) {
  document
    .querySelectorAll(".squeaky1")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squeaky1 = new Audio("toysSounds/squeaky1.mp3");
      squeaky1.play();
    });
  document
    .querySelectorAll(".squeaky2")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squeaky2 = new Audio("toysSounds/squeaky2.mp3");
      squeaky2.play();
    });
  document
    .querySelectorAll(".squeaky3")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squeaky3 = new Audio("toysSounds/squeaky3.mp3");
      squeaky3.play();
    });
  document
    .querySelectorAll(".squeaky4")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squeaky4 = new Audio("toysSounds/squeaky4.mp3");
      squeaky4.play();
    });
  document
    .querySelectorAll(".squeaky5")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squeaky5 = new Audio("toysSounds/squeaky5.mp3");
      squeaky5.play();
    });
  document
    .querySelectorAll(".squeaky6")
    [i].addEventListener("click", function () {
      // Add audio in image
      let squeaky6 = new Audio("toysSounds/squeaky6.mp3");
      squeaky6.play();
    });
}
