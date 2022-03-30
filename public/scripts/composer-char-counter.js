$(document).ready(() => {
  jQuery === $;

  const $tweetTextArea = $('#tweet-text-area');
  const $characterCounterOutput = $("output.counter");
  
  //Counts chatacters in tweet and displays
  $tweetTextArea.on('input', function() {
    $characterCounterOutput.val(140 - $(this).val().length);
    if ((140 - $(this).val().length) < 0) {
      $characterCounterOutput.css("color","#bd1125");
    } else {
      $characterCounterOutput.css("color","white");
    }
  });

});