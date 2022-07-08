function textNumber(value) {
  let operand = document.querySelector(".current-operand").innerHTML;
  let hasDecimal = operand.indexOf(".");
  if (hasDecimal !== -1 && value === ".") {
    return "";
  } else {
    console.log(typeof document.querySelector(".current-operand").innerHTML);
    return (document.querySelector(".current-operand").innerHTML += value);
  }
}
console.log(document.querySelector(".current-operand"));

function Calculate() {
  let par = document.querySelector(".current-operand").innerHTML;
  let calculated = eval(par);
  if (calculated === undefined) {
    Clear(calculated);
  } else {
    document.querySelector(".current-operand").innerHTML =
      Math.round(calculated * 1000) / 1000;
    console.log(calculated);
  }
}
function Clear() {
  document.querySelector(".current-operand").innerHTML = "";
}
