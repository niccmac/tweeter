$(document).ready(() => {
  jQuery === $;

  const $tweetTextArea = $('#tweet-text-area');
  
  $tweetTextArea.on('input', () => {
    console.log($tweetTextArea.val().length);
  });

});