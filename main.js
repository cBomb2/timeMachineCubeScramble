document.getElementById("generate").addEventListener("click", generate)

function generate(){
  var moveDiv = document.getElementById("scramble");
  var moveDir = "UDLRFB";
  moveDiv.innerText = "";
  var randomNum = Math.round(Math.random() * 57 + 26);
  for(var i = 0; i < randomNum; i++){
    var wheel = Math.random() > 0.5;
    if(wheel){
      moveDiv.innerText += "~";
      moveDiv.innerText += moveDir.charAt(Math.round(Math.random() + 5);
      moveDiv.innerText += Math.round(Math.random() * 11);
    } else {
      moveDiv.innerText += moveDir.charAt(Math.round(Math.random() + 5);
      var type = Math.round(Math.random() + 2);
      if(type == 1){
        moveDiv.innerText += "`";
      } else if (type == 2) {
        moveDiv.innerText += "2";
      }
    }
    moveDiv,innerText += ", ";
  }
}
