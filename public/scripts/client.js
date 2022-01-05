/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

////////----Creating functional tweeter container----///////
$(document).ready(function() {
  const data = []
  const createTweetElement = function(tweet) {
    let $tweet = $(`<article class="tweet-container">
    <header class="tweet-header">
      <div class="header-content">
        <img src = "${tweet.user.avatars}" class="new-pic" />
        <p class="name2"> ${tweet.user.name}</p>
      </div>
        <p class="handle">${tweet.user.handle}</p>
    </header>
      <div class="word-container">
        <p>${tweet.content.text}</p>
      </div> 
    <footer class="tweet-footer">
      <p class="tweet-date">${timeago.format(tweet.created_at)}</p>
      <div class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-heart"></i>
        <i class="fas fa-retweet"></i>
      </div>
    </footer>
  </article>`)
  
  return $tweet;
}

///-----Function to stop cross scripting attacks---///
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};



$("#submit-form").submit(function(event) {
  event.preventDefault();
    
  const serialized = $("#submit-form").serialize();
  const textTweet = $("#tweet-text").val().length
  const error = $("#error-message")

  if(!textTweet) {
    error.text("⛔ ----- Do not tweet blanks! ----- ⛔").slideDown();
  } else if (textTweet > 140) {
    error.text("⛔ ----- Do not exceed 140 characters! ----- ⛔").slideDown()
  } else {
      error.slideUp(500)

    $.ajax({
      url: "/tweets/",
      method: "POST",
      data: serialized,
    }).then(function() {
     console.log('success');
     loadTweets();
    });
    $("form").trigger("reset");
  }

  const loadTweets = function () {
    $.ajax({
      url:"/tweets",
      method:"GET",
    }).then(function(tweets){
      renderTweets(tweets);
    })
  }
  loadTweets()
})


const renderTweets = function(tweets) {
  $("#main-container").html(""); //had .empty before 
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet)
    $("#main-container").prepend($tweet)
  }  
}
renderTweets(data);

});


