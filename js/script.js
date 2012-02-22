$(document).ready(function() {
    // Set up variables, stupid javascript, I don't know why I'm not using coffeescript
    var template, feedData, renderedFeed;

    // Read in the template from the HTML document
    template = $("#feed-template").html();

    function renderFeed() {
        renderedFeed = Mustache.render(template, feedData);
        $("#feed").html(renderedFeed); // Change this line to place where the rendered feed gets placed
    }

    // Call to remote server returning the feed as JSON data
    $.ajax({
        contentType: "application/json",
        type: "GET",
        dataType: "jsonp",
        url: "http://birdfeeder.herokuapp.com/feeds/1.json",
        success: function(data) {
            feedData = data;
            renderFeed(); // Once data is received, render that feed!
        }
    });
});