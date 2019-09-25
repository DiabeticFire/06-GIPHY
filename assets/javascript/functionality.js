// Global Variables
var animalArray = ["Cat", "Crow", "Dog", "Snake", "Wolf"];
var gifArray = [
  (gif0 = new GifObj()),
  (gif1 = new GifObj()),
  (gif2 = new GifObj()),
  (gif3 = new GifObj()),
  (gif4 = new GifObj()),
  (gif5 = new GifObj()),
  (gif6 = new GifObj()),
  (gif7 = new GifObj()),
  (gif8 = new GifObj()),
  (gif9 = new GifObj())
];

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
    btn.attr("class", "gifbtn");
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
$(document).on("click", ".gifbtn", function() {
  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/search?api_key=GBcmuOaZd83wgSv5GOtpkFkWcSdu4yhO&q=" +
      $(this).text() +
      "&limit=10&offset=0&rating=G&lang=en",
    method: "GET"
  }).then(function(data) {
    console.log(data);
    for (var i = 0; i < 10; i++) {
      gifArray[i] = new GifObj(
        i.toString(),
        false,
        data.data[i].images.original_still.url,
        data.data[i].images.original.url,
        "gif"
      );
      gifArray[i].update_url();
      gifArray[i].tag.attr("class", "gif");
      gifArray[i].tag.attr("id", i);
      displayGifs();
    }
  });
});

// Display gifs
function displayGifs() {
  $("#display").empty();
  gifArray.forEach(gif => {
    $("#display").append(gif.tag);
  });
}

// Alternate Playing / Still
$(document).on("click", ".gif", function() {
  console.log($(this).attr("id"));
  gifArray.forEach(gif => {
    if (gif.id === $(this).attr("id")) {
      gif.switch_url();
    }
  });
});

// Display Preset Buttons
displayButtons();
