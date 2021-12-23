
////-Function 
$(document).ready(function() {
  
const $tweetBox = $("#tweet-text");

  $tweetBox.on("keyup", function() {

    let count = $(this).val().length;
    let newValue = 140 - count;

    
    let counter = $(this).siblings("div").children("output");
    counter.text(newValue);

    if (newValue < 0) {
      counter.css("color", "red");
    } else counter.css("color", '');
  });
  
  $tweetBox.focus()
});
  




