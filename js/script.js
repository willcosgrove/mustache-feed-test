/* Author: Will Cosgrove

*/

// Set up variables, stupid javascript, I don't know why I'm not using coffeescript
var template, feedData, renderedFeed;

// Read in the template from the HTML document
template = $("#feed-template").html();

// Simulate call to remote server returning the feed as JSON data
// $.get("/js/fake-feed.json", function(data){
//   console.log(data);
//   feedData = data;
// })
feedData = {
  "items": [
    {
      "title": "News flash!  Rails is the best!",
      "source": "http://iloverails.com",
      "timestamp": "02-10-12",
      "body": "Ruby on Rails is a breakthrough in lowering the barriers of entry to programming. Powerful web applications that formerly might have taken weeks or months to develop can be produced in a matter of days."
    },
    {
      "title": "News flash!  Rails is the best!",
      "source": "http://iloverails.com",
      "timestamp": "02-10-12",
      "body": "Ruby on Rails is a breakthrough in lowering the barriers of entry to programming. Powerful web applications that formerly might have taken weeks or months to develop can be produced in a matter of days."
    },
    {
      "title": "News flash!  Rails is the best!",
      "source": "http://iloverails.com",
      "timestamp": "02-10-12",
      "body": "Ruby on Rails is a breakthrough in lowering the barriers of entry to programming. Powerful web applications that formerly might have taken weeks or months to develop can be produced in a matter of days."
    },
    {
      "title": "News flash!  Rails is the best!",
      "source": "http://iloverails.com",
      "timestamp": "02-10-12",
      "body": "Ruby on Rails is a breakthrough in lowering the barriers of entry to programming. Powerful web applications that formerly might have taken weeks or months to develop can be produced in a matter of days."
    },
    {
      "title": "News flash!  Rails is the best!",
      "source": "http://iloverails.com",
      "timestamp": "02-10-12",
      "body": "Ruby on Rails is a breakthrough in lowering the barriers of entry to programming. Powerful web applications that formerly might have taken weeks or months to develop can be produced in a matter of days."
    }
  ]
}

renderedFeed = Mustache.render(template, feedData);

console.log(renderedFeed);

$("#feed").html(renderedFeed)


