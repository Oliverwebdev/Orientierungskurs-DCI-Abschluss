
// button soll verschwinden nach klicken

var button = document.getElementById("button");
var clickCount = 0;

button.addEventListener("click", function() {
  clickCount++;
  if (clickCount >= 5) {
    button.style.display = "none";
  }
}    
)
;

