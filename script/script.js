// $("input:checkbox").click(function () {
//   $("input:text").attr("disabled", !this.checked);
// });
// document.getElementById("flexRadioDefault3").onchange = function () {
//   document.getElementById("forradio3").disabled = !this.checked;
// };
// document.getElementById("flexRadioDefault03").onchange = function () {
//   document.getElementById("forradio03").disabled = !this.checked;
// };
// document.getElementById("flexRadioDefault03").onchange = function () {
//   document.getElementById("forradio03").attr = disabled;
// };

function enablecheckbox() {
  text0 = document.getElementById("forradio02");
  text = document.getElementById("forradio03");
  text2 = document.getElementById("forradio04");
  text01 = document.getElementById("forradio002");
  text3 = document.getElementById("forradio003");
  text4 = document.getElementById("forradio004");

  if (document.getElementById("flexRadioDefault01").checked) {
    text0.removeAttribute("disabled", "");
    text.setAttribute("disabled", "");
    text2.setAttribute("disabled", "");
  }
  if (document.getElementById("flexRadioDefault03").checked) {
    text.removeAttribute("disabled", "");
    text2.setAttribute("disabled", "");
    text0.setAttribute("disabled", "");
  }
  if (document.getElementById("flexRadioDefault04").checked) {
    text2.removeAttribute("disabled", "");
    text.setAttribute("disabled", "");
    text0.setAttribute("disabled", "");
  }
  if (document.getElementById("flexRadioDefault001, flexRadioDefault002").checked) {
    text01.removeAttribute("disabled", "");
    text3.setAttribute("disabled", "");
    text4.setAttribute("disabled", "");
  }
  if (document.getElementById("flexRadioDefault003").checked) {
    text3.removeAttribute("disabled", "");
    text4.setAttribute("disabled", "");
    text01.setAttribute("disabled", "");
  }
  if (document.getElementById("flexRadioDefault004").checked) {
    text4.removeAttribute("disabled", "");
    text3.setAttribute("disabled", "");
    text01.setAttribute("disabled", "");
  }
}

////////////////////////////////////////////////////
const slideBoard = document.querySelector(".sliding-board");
const singUp = document.querySelector(".singUp");
const singIn = document.querySelector(".singIn");

const slidingState = document.querySelector(".main");

singIn.addEventListener("click", function () {
  slideBoard.classList.add("sliding");
  slidingState.classList.replace("sing-up", "sing-in");
});

singUp.addEventListener("click", function () {
  slideBoard.classList.remove("sliding");
  slidingState.classList.replace("sing-in", "sing-up");
});
