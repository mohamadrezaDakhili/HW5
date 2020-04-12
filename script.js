// Answer One
let txtValidateEmail = document.getElementById("showValidateEmail");
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  if (re.test(email) == true) {
    txtValidateEmail.innerHTML =
      "Email : " + " " + email + " is Validate :)";
  } else {
    let str = "Email : " + " " + email + " is Not Validate :(";
    let result = str.fontcolor("red");
    txtValidateEmail.innerHTML = result;
  }
}

// Answer Two
let txtValidatePhone = document.getElementById("showValidatePhone");
var mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
  junkReg = /[^\d]/gi,
  persinNum = [
    /۰/gi,
    /۱/gi,
    /۲/gi,
    /۳/gi,
    /۴/gi,
    /۵/gi,
    /۶/gi,
    /۷/gi,
    /۸/gi,
    /۹/gi,
  ],
  num2en = function (str) {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persinNum[i], i);
    }
    return str;
  },
  getMobiles = function (str) {
    var mobiles = num2en(str + "").match(mobileReg) || [];
    mobiles.forEach(function (value, index, arr) {
      arr[index] = value.replace(junkReg, "");
      arr[index][0] === "0" || (arr[index] = "0" + arr[index]);
    });
    txtValidatePhone.innerHTML ="Phone Number : " + mobiles;
  };
