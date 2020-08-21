// $('#time').html(new Date().toLocaleTimeString());

var timeOut;
function startTime() {
  document.getElementById('time').innerHTML =
    moment().format("hh:mm:ss");
  clearTimeout(timeOut);
  timeOut = setTimeout(startTime, 1000);
  
  document.getElementById('ap').innerHTML =
    moment().format("A");
}

function getDate () {
document.getElementById('dateTag').innerHTML = 
  moment().format('dddd') + "," + " " + " " + moment().format('LL');
}

$(document).ready(function() {
  startTime();
  getDate();
});

(function() {
  $(document ).ready(function() {
      getVerse();
  });

  $("button").click(function(){
    getVerse();
  });

  var getVerse = function() {
    $("#spinner").show();
      $.ajax({
        url: "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback", 
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result){
           $("#newQuote")
             .html(
                   result[0].bookname+
                   ' ' + result[0].chapter +
                   ':' + result[0].verse );
            $("#verseText").html (
                   result[0].text);
          $("#spinner").hide();
        }
      });
  }
})();