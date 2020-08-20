// $('#time').html(new Date().toLocaleTimeString());

var timeOut;
function startTime() {
  document.getElementById('time').innerHTML =
    moment().format("hh:mm:ss A");
  clearTimeout(timeOut);
  timeOut = setTimeout(startTime, 1000);
}

$(document).ready(function() {
  startTime();
});



