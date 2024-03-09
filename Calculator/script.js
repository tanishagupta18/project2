let storeText = "";
document
  .querySelector(".button-class")
  .addEventListener("click", function (event) {
    if (event.target.tagName == "BUTTON") {
      let enterText = event.target.innerText;
      if (enterText == "=") {
        storeText = eval(storeText).toString();
      } else if (enterText == "DEL") {
        storeText = storeText.slice(0, -1);
      } else if (enterText == "RESET") {
        storeText = "";
      } else {
        storeText += enterText;
      }
      document.getElementsByClassName("screen")[0].innerHTML = storeText;
    }
  });
