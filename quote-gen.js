$("document").ready(function() {
  $("#gen-button").click(getQuote);
});

function getQuote() {
  $("#twitter").text("");
  $.ajax({
      url: "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&key&format=json&lang=en",
      type: "GET",
      dataType: "json",
      success: function(result){
        quote = result.quoteText
        author = result.quoteAuthor
        $("#quote_Text").text(result.quoteText);
        $("#quote_Author").text(result.quoteAuthor);
        $("#quote_Link").text(result.quoteLink);
        twttr.widgets.createShareButton("",
          document.getElementById('twitter'),
          {text: quote + " - " + author}
        );
      },
      error: function() {
        var errorMsg = "Shit has gone wrong!"
        $("#quote_Text").text(errorMsg);
      }
    })
}
