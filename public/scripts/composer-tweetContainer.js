$(document).ready(() => {
  jQuery === $;

  const $tweetContainer = $("article");
  const $flag = $(".flag-retweet-like-buttons > div > #flag");
  const $retweet = $(".flag-retweet-like-buttons > div > #rt");
  const $like = $(".flag-retweet-like-buttons > div > #heart");
  $tweetContainer.hover(function() {
    $(this).toggleClass("classWithShadow");
  });
  $flag.hover(function() {
    $(this).toggleClass("yellowButtonClass");
  });
  $retweet.hover(function() {
    $(this).toggleClass("yellowButtonClass");
  });
  $like.hover(function() {
    $(this).toggleClass("yellowButtonClass");
  });
});