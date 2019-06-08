//Global Variables
var animalArray = ["Cat", "Dog", "Snake", "Cow", "Crab"];

function displayButtons() {
  animalArray.sort();
  animalArray.forEach(animal => {
    var btn = $("<button>");
    btn.text(animal);
    $("button-holder").append(btn);
  });
}

displayButtons();
