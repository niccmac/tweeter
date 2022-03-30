/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  const tweetData = [
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
      "created_at": 1461116276273
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
    //Creating Markup?
    const ms = `${tweet.created_at}`;
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
          <time>${callTime}</time>
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
      $('#posted-tweets').prepend(tweetElement);
    }
  };
  // renderTweets()
  renderTweets(tweetData);

});

