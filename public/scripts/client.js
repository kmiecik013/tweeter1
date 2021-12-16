/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]


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

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet)

    $("#main-container").append($tweet)
  }
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}
renderTweets(data);


});
