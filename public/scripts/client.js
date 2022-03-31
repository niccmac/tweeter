/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const createTweetElement = function(tweet) {
    //Creating Markup?
    const ms = `${tweet.created_at}`;
   
    const tweetTimeAgo = timeago.format(ms);
    const now = performance.now();
    
    const timeSinceTweet = function() {
      const days = parseInt((ms - now) / (1000 * 60 * 60 * 24));
      const hours = parseInt((ms - now) / (1000 * 60 * 60) % 24);
      const minutes = parseInt(Math.abs(ms - now) / (1000 * 60) % 60);
      const seconds = parseInt(Math.abs(ms - now) / (1000) % 60);
    
      if (seconds < 59) {
        return seconds + " seconds ago";
      } else if (minutes < 59) {
        return minutes + " minutes ago";
      } else if (hours < 23) {
        return hours + " hours ago";
      } else {
        return days + " days ago";
      }
    };
    const callTime = timeSinceTweet();
    const markup =
     `
      <article class="tweet">
        <div class="top-row">
          <div>
            <img src="${tweet.user.avatars}" >
            <p>${tweet.user.name}</p>
          </div>
          <a href="/${tweet.user.handle}">${tweet.user.handle}</a>
        </div>
        <div class="mid-row">
          <p>${tweet.content.text}</p>
        </div>
        <div class="flag-retweet-like-buttons">
          <time>${tweetTimeAgo}</time>
          <div>
            <i class="fa-solid fa-flag fa-2xs"></i>
            <i class="fa-solid fa-retweet fa-2xs"></i> 
            <i class="fa-solid fa-heart fa-2xs"></i>
          </div>
        </div>
      </article>
    `;
    return markup;
  };
  
  

  const renderTweets  = function(tweets) {
    for (const tweet of tweets) {
      const tweetElement = createTweetElement(tweet);
      $('.posted-tweets').prepend(tweetElement);
    }
  };
 
 

  //Form submittion
  const loadTweets = function() {
    $.ajax({
      type: "GET",
      url: "/tweets",
    }).then((data) => {
      console.log("data", data);
      renderTweets(data);
    })
  };

  $(".tweet-submit-form").on("submit", function(event) {
    event.preventDefault();
    $('#submit-button').prop("disabled", true).text("Loading");
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(".tweet-submit-form").serialize()
    }).then((data) => {
      $('#submit-button').prop("disabled", false).text("Submit");
      loadTweets();
    })
  });

  












});

