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

$(document).ready(function() {
  startTime();
});



