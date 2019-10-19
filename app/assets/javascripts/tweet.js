$(function(){

  function buildHTML(tweet){
    var content = tweet.content ? tweet.content : "";
    var image = tweet.image ? `<img src=${tweet.image}>` : "";
    var html =
      `<div class="tweet" data-tweet-id=${tweet.id}>
        <div class="upper-tweet">
          <div class="upper-tweet__user-name">
            ${tweet.user_name}
          </div>
          <div class="upper-tweet__date">
            ${tweet.date}
          </div>
        </div>
          <div class="lower-tweet">
            <p class="lower-tweet__content">
              ${content}
            </p>
          </div>
          ${image}
      </div>`
    return html;
  }

  $('#new_tweet').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.tweets').append(html);
      $('.tweets').animate({scrollTop: $('.tweets')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
    })
      .fail(function(){
        alert('error');
    })
    return false;
  });

  var reloadTweets = function() {
    if (window.location.href.match(/\/groups\/\d+\/tweets/)) {
      var last_tweet_id = $('.tweet:last').data('tweet-id');

      $.ajax({
        url: 'api/tweets',
        type: 'get',
        dataType: 'json',
        data: {id: last_tweet_id}
      })

      .done(function(tweets) {
        var insertHTML = "";
        tweets.forEach(function(tweet){
          insertHTML = buildHTML(tweet);
          $('.tweets').append(insertHTML);
          $('.tweets').animate({scrollTop: $('.tweets')[0].scrollHeight}, 'fast');
        });
      })

      .fail(function() {
        alert("自動更新に失敗しました")
      });
    }; 
  };
  setInterval(reloadTweets, 5000);
});