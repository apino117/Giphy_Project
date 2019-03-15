// This is the guery url for giphy with the API key. In this example it's for "futurama + fry" with a limit of 10 and a rating of G.
// https://api.giphy.com/v1/gifs/search?api_key=Q6wuNS9yXqx9RCJVlHTGwHvkcJXhobE8&q=futurama + fry&limit=10&offset=0&rating=G&lang=en

// 1) Make a button with a gif
// 2) Complete the ajax portion for that button
// 3) Make a loop to make an array of buttons
// 4) Use array to populate the field with buttons 
// 5) Create a search field which will add to it
// 6) Create on click for the images
// 7) On click swap animated state for still state


// ----------------- ALL ABOUT THE BUTTONS ---------------- //


// --------- Starting array for buttons

var gifArray = ["Lisa", "Marge", "Homer", "Bart"];

// When the document loads
window.onload = function () {

    for (i = 0; i < gifArray.length; i++) {
        // Create button type 
        var gifButton = $("<button>");

        // Add an attribute
        gifButton.attr("data-gif-button");

        // Add class
        gifButton.addClass("gif-button gif gif-button-color btn btn-success");

        // Set text of buttons
        gifButton.text(gifArray[i]);

        // Set value of buttons
        gifButton.val(gifArray[i]);

        // Append buttons 
        $("#buttons-column").append(gifButton);
    }
}


// ------------ User submits new button --------- //

// Onclick capture
$("#addGif-button").on("click", function () {

    // Prevent the submit from refreshing the page
    event.preventDefault();

    // Create button type 
    var gifButton = $("<button>");

    // Add an attribute
    gifButton.attr("data-gif-button");

    // Add class
    gifButton.addClass("gif-button gif-button-color btn btn-success");

    // console.log($("#input-text").val());

    // Set text of buttons
    gifButton.text($("#input-text").val());

    // Set value of buttons
    gifButton.val($("#input-text").val());

    // Append to rest of the buttons
    $("#buttons-column").append(gifButton);

    // Clear text-box when done
    $("#input-text").val("");

})








// --------------- WHEN USER CLICKS A GIF-BUTTON ------------------ //

// On click function
$(document.body).on("click", ".gif-button", function () {
    console.log("click!");
    console.log($(this).val());

    // First clear out the field if it's got stuff
    $("#gif-column").empty();

    // ----------------AJAX----------------------- //

    // Prevent the submit from refreshing the page
    event.preventDefault();

    // We'll get this term from the html, volcano is an example
    var searchGif = $(this).val();

    // URL for query
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Q6wuNS9yXqx9RCJVlHTGwHvkcJXhobE8&q=The%20Simpsons%20+%20" + searchGif + "&limit=10&offset=0&rating=PG-13&lang=en";

    // AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // AJAX function
        .then(function (ajaxResponse) {

            for (i = 0; i < 9; i++) {
                console.log(queryURL);

                // 1) 10 static gifs
                console.log(ajaxResponse.data[i].images.original_still.url);

                // 2) Their ratings which we display 
                console.log(ajaxResponse.data[i].rating);

                // Create an image tag to hold the json property
                var gifImage = $("<img>");

                // Add a class to the image
                gifImage.addClass("gif");

                // Add attributes to get the source
                gifImage.attr("src", ajaxResponse.data[i].images.original_still.url);

                // Add a data state for the animation
                gifImage.attr("data-state", "still")

                // Create a p tag to hold the rating
                var gifRating = $("<p>");
                gifRating.text("Rating: " + JSON.stringify(ajaxResponse.data[i].rating));

                // Populate the container with all that
                $("#gif-column").append(gifImage);
                $("#gif-column").append(gifRating);
            }


            // --------------- WHEN USER CLICKS A GIF ------------------ //

            $(document.body).on("click", ".gif", function () {
                console.log("giflcick");


                // Make a variable named state and then store the image's data-state into it
                var state = $(this).attr("data-state");
                console.log(state);

                // If the state is still
                if (state === "still") {

                    // Set the source to the animated key
                    $(this).attr("src", ajaxResponse.data[i].images.original.url);

                    // Set the data-state to animated
                    $(this).attr("data-state", "animate");

                // Otherwise if it's already amimated
                } else {

                    // Set the source to the still
                    $(this).attr("src", ajaxResponse.data[i].images.original_still.url);

                    // Set the data-state to still
                    $(this).attr("data-state", "still");
                }
                console.log(i)
            })
        });
})







