var user_number = document.getElementById("user_number");
var random_number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");

var count = 10;
var win = 0;
var loss = 0;

function tryMyLuck(userNumber) {
  var randomNumber = Math.ceil(Math.random() * 6);
  user_number.innerText = userNumber;
  random_number.innerText = randomNumber;
  total.innerText = --count;

  if (randomNumber === userNumber) {
    result.innerText = "You won!";
    info_box_result.style.backgroundColor = "#32CD32";
    win_html.innerText = ++win;
  } else {
    result.innerText = "You lost!";
    info_box_result.style.backgroundColor = "#FF6347";
    loss_html.innerText = ++loss;
  }

  checkResult();
}
function checkResult() {
    if (count == 0) {
      var messageContainer = document.createElement("div");
      messageContainer.innerText = (win >= 3) ? "Congratulations! You won!" : "Sorry! You lost. Try again!";
      messageContainer.classList.add("msg");
      var container = document.querySelector(".container");
      container.parentNode.insertBefore(messageContainer, container.nextSibling);
  
      count = 10;
      win = 0;
      loss = 0;
      total.innerText = count;
      win_html.innerText = win;
      loss_html.innerText = loss;
    }
  }
  
  
