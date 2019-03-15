// This is the guery url for giphy with the API key. In this example it's for "cat" with a limit of one and a rating of g.
// https://api.giphy.com/v1/gifs/search?q=cat&limit=1&rating=g&api_key=Q6wuNS9yXqx9RCJVlHTGwHvkcJXhobE8


// 1) Make a button with a gif
// 2) Complete the ajax portion for that button
// 3) Make a loop to make an array of buttons
// 4) Use array to populate the field with buttons 
// 5) Create a search field which will add to it
// 6) Create on click for the images
// 7) On click swap animated state for still state


// Creating the buttons:

var gifArray = ["Fry",];
console.log(gifArray[0]);

// When the document loads

window.onload = function () {
    // Create button type 
    var gifButton = $("<button>");
    // Add an attribute
    gifButton.attr("data-gif-button");
    // Add class
    gifButton.addClass("gif-button gif gif-button-color btn btn-success");
    // Set text of buttons
    gifButton.text(gifArray[0]);
    // Append buttons 
    $("#buttons-column").append(gifButton);
}






