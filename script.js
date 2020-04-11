// No One
let txtValidate = document.getElementById("showValidateEmail");
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  if (re.test(email) == true) {
    txtValidate.innerHTML =
      "Email : " + " " + email + " is Validate :)";
  } else {
    let str = "Email : " + " " + email + " is Not Validate :(";
    let result = str.fontcolor("red");
    txtValidate.innerHTML = result;
  }
}
