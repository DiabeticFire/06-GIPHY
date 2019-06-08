// Global Variables
var animalArray = ["Cat", "Crow", "Dog", "Snake", "Wolf"];

// Create New Buttons
$("#animal-btn").on("click", function(e) {
  var animal = $("#animal")
    .val()
    .trim();
  animalArray.push(capitalize(animal));
  $("#animal").empty();
  displayButtons();
});

// Display Buttons
function displayButtons() {
  $("#button-holder").empty();
  animalArray.forEach(animal => {
    var btn = $("<button>");
    btn.text(animal);
    btn.attr("class", "gif");
    $("#button-holder").append(btn);
  });
}

// Ensure that the word is capitalized
function capitalize(word) {
  var temp = "";
  for (var i = 0; i < word.length; i++) {
    if (!i) temp += word[i].toUpperCase();
    else temp += word[i].toLowerCase();
  }
  return temp;
}

// Display 10 Still Gifs
$(document).on("click", ".gif", function() {
  console.log("I was clicked!");
  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/search?api_key=GBcmuOaZd83wgSv5GOtpkFkWcSdu4yhO&q=" +
      $(this).text +
      "&limit=10&offset=0&rating=G&lang=en",
    method: "GET"
  }).then(function(data) {
    console.log(data);
  });
});

// Display Preset Buttons
displayButtons();
