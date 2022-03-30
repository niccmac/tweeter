$(document).ready(() => {
  jQuery === $;

  const $tweetTextArea = $('#tweet-text-area');
  const $characterCounterOutput = $("output.counter");
  
//Counts chatacters in tweet and displays
  $tweetTextArea.on('input', function() {
    $characterCounterOutput.val(140 - $(this).val().length);
  });

});