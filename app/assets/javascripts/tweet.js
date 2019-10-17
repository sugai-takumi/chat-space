$(function(){ 
  function buildHTML(tweet){
   if ( tweet.image ) {
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
             ${tweet.content}
           </p>
         </div>
         <img src=${tweet.image} >
       </div>`
     return html;
   } else {
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
             ${tweet.content}
           </p>
         </div>
       </div>`
     return html;
   };
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
  });
   return false;
 });
});