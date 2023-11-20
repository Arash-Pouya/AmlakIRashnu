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
  text = document.getElementById("forradio03");
  text2 = document.getElementById("forradio04");
  if (document.getElementById("flexRadioDefault03").checked) {
    text.removeAttribute("disabled", "");
    text2.setAttribute("disabled", "");
  }
  if (document.getElementById("flexRadioDefault04").checked) {
    text2.removeAttribute("disabled", "");
    text.setAttribute("disabled", "");
  }
}
