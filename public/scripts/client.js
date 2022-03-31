/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const createTweetElement = function(tweet) {
    //Creating Markup
    const ms = `${tweet.created_at}`;
    const tweetTimeAgo = timeago.format(ms);
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    const markup =
     `
      <article class="tweet">
        <div class="top-row">
          <div>
            <img src="${escape(tweet.user.avatars)}" >
            <p>${escape(tweet.user.name)}</p>
          </div>
          <a href="/${escape(tweet.user.handle)}">${escape(tweet.user.handle)}</a>
        </div>
        <div class="mid-row">
          <p>${escape(tweet.content.text)}</p>
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
    const checkTweet = $('#tweet-text-area').val();
    
    if (checkTweet === "") {
      $("#tweet-error-message").text("Tweet must have a valid value.");
      $("#tweet-error").show();
      return;
    } else if (checkTweet === null) {
      $("tweet-error-message").text = "Tweet must have a valid value.";
      return;
    } else if (checkTweet.length > 140) {
      return alert("Your tweet needs to be a little shorter.");
    }
    // console.log("data in here needs to be checked", event);
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(".tweet-submit-form").serialize()
    }).then((data) => {
      $('#submit-button').prop("disabled", false).text("Submit");
      loadTweets();
    });
  });

  












});

