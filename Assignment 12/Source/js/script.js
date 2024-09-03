const inputElem = document.querySelector("input");
const spanElem = document.querySelector(".counter");
const inputMaxLength = inputElem.getAttribute("maxlength");

inputElem.addEventListener("keyup", function () {
  spanElem.innerHTML = inputMaxLength - inputElem.value.length;
});
