/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
  /* Your code for creating the tweet element */
  // ...
  return $tweet;
}


//stop cross-scriptig attacks 
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    let $tweet = createTweetElement(tweet)
// takes return value and appends it to the tweets container
    $("#main-container").prepend($tweet)
  }
  
  
  
}
renderTweets(data);





  $("#submit-form").submit(function(event) {
    event.preventDefault();
    console.log("Default event cannot occur")
  

  const serialized = $("#submit-form").serialize();
    console.log('test sterilize', serialized);

  const textTweet = $("#tweet-text").val().length
  const error = $("#error-message")

  if(!textTweet) {
    error.text("Cannot tweet an empty tweet")
  }
  if (textTweet > 140) {
    alert("Keep your tweet to less tahn 140 chaqrcters")
  }

    $.ajax({
      url: "/tweets/",
      method: "POST",
      data: serialized,
    }).then(function() {
     console.log('success');
    });


  const loadTweets =function () {
    $.ajax({
      url:"/tweets",
      method:"GET",
    }).then(function(tweets){
      renderTweets(tweets);
    })
  }
  loadTweets()

})



});


