var timerId = null;
function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = hours;
  time += (minutes < 10 ? ":0" : ":") + minutes;
  time += (seconds < 10 ? ":0" : ":") + seconds;
  document.getElementById("screen").value = time;
  timerId = setTimeout("getTime()", 1000);
}
