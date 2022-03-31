$(document).ready(() => {
  jQuery === $;

  const $tweetTextArea = $('#tweet-text-area');
  const $characterCounterOutput = $("output.counter");
  
  //Counts chatacters in tweet and displays
  $tweetTextArea.on('input', function() {
    $("#tweet-error").hide();
    $characterCounterOutput.val(140 - $(this).val().length);
    if ((140 - $(this).val().length) < 0) {
      $characterCounterOutput.css("color","#bd1125");
      $("#tweet-error-message").text("Your tweet needs to be a little shorter.");
      $("#tweet-error").slideDown();
    } else {
      $characterCounterOutput.css("color","white");
      $("#tweet-error").hide();
    }
  });

});