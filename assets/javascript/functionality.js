// Global Variables
var animalArray = ["Cat", "Crow", "Dog", "Snake", "Wolf"];
var gifArray = [gif0 = new Gif, gif1 = new Gif, gif2 = new Gif, gif3 = new Gif, gif4 = new Gif, gif5 = new Gif, gif6 = new Gif, gif7 = new Gif, gif8 = new Gif, gif9 = new Gif];

class Gif {
  constructor(id, active, still_url, playing_url, clas) {
    this.id = id;
    this.tag = $("<img>");
    this.active = active;
    this.still_url = still_url;
    this.playing_url = playing_url;
    this.class = clas;
  }
    update_url = function () {
      if (this.active)
        this.tag.attr("src", this.playing_url);
      else if (!this.active)
        this.tag.attr("src", this.still_url);
      else
        console.log("An object has an invalid active property: " + this);
    };
    switch_url = function () {
      if (this.active)
        this.active = false;
      else if (!this.active)
        this.active = true;
      this.update_url();
    };
    update_class = function () {
    };
}

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
      gifArray[i] = new GifObj(i, false, data.data[i].images.original_still.url, data.data[i].images.original.url, "gif");
      gifArray[i].update_url();
      gifArray[i].tag.attr("class", "gif");
      $("#display").append(gifArray[i].tag);
    }
  });
});

// // Alternate Playing / Still
// $(document).on("click", ".gif", function() {

// }

// Display Preset Buttons
displayButtons();
