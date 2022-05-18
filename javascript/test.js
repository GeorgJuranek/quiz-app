const submitButton = document.querySelector('[data-js="submitButton"]');

submitButton.addEventListener("click", onSubmitClick);

function onSubmitClick() {
  //console.log("Button wird erkannt");
  submitButton.classList.toggle("testJs-class");

  /*if (submitButton.innerHTML == "SUBMIT") {
    console.log("wird veraendert");
    submitButton.innerHTML = "SUBMITED";
  } else {
    submitButton.innerHTML = "SUBMIT";
  }*/
}
