/* Author: Will Cosgrove

*/

// Set up variables, stupid javascript, I don't know why I'm not using coffeescript
var template, feedData, renderedFeed;

// Read in the template from the HTML document
template = $("#feed-template").html();

// Simulate call to remote server returning the feed as JSON data
$.get("/js/fake-feed.json", function(data){
  feedData = data;
  renderFeed(); // Once data is received, render that feed!
})

function renderFeed(){
  renderedFeed = Mustache.render(template, feedData);
  $("#feed").html(renderedFeed);
}



