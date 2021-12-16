$(document).ready(function() {

/*
  const $newBox = $("#tweet-text");
  $newBox.keyup(function(e) {

    let tweetLength = e.target.value.length;
    
    $('.counter').text(140 - tweetLength);

    if(tweetLength > 140) {
      $('.counter').css('color','red')
    }else {
      $('.counter').css('color','')
    }
  })
*/

const $tweetBox = $("#tweet-text");

  $tweetBox.on("keyup", function() {

    let count = $(this).val().length;
    let newValue = 140 - count;

    // traverse the dom from our this / siblings / parents /
    let counter = $(this).siblings("div").children("output");
    //console.log(counter);
    counter.text(newValue);

    if (newValue < 0) {
      counter.css("color", "red");
    } else counter.css("color", '');

  });
  
});
  




