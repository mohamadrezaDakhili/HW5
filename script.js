// Answer One
let txtValidateEmail = document.getElementById("showValidateEmail");
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  if (re.test(email) == true) {
    txtValidateEmail.innerHTML = "Email : " + " " + email + " is Validate :)";
  } else {
    let str = "Email : " + " " + email + " is Not Validate :(";
    let result = str.fontcolor("red");
    txtValidateEmail.innerHTML = result;
  }
}

// Answer Two
let phoneNumber = document.getElementById("txtPhoneNumber");
function checkPhone(strPhone) {
  var res = strPhone.slice(0, 2);
  if (strPhone.length == 11 && res == "09") {
    phoneNumber.innerHTML = "Phone Number : " + strPhone + "is Validate :)";
  } else {
    let str = "Phone Number : " + strPhone + " is Not Validate :(";
    let result = str.fontcolor("red");
    phoneNumber.innerHTML = result;
  }
}

// Answer three
let userName = document.getElementById("txtUserName");
function validateUser(strUser) {
  let substring = strUser.includes(".");
  let substr = strUser.includes("_");
  if (
    strUser.length < 3 ||
    strUser.length > 9 ||
    substring == false ||
    substr == false
  ) {
    let str = "User Name : is Not Validate :(";
    let result = str.fontcolor("red");
    userName.innerHTML = result;
  } else {
    userName.innerHTML = "User Name : " + strUser + " is validate :)";
  }
}

// Answer four
let txtSearch = document.getElementById("txtSearch");
let txtError = document.getElementById("txtError");
let inputSearch = document.getElementById("inputSearch");
const fileUrl =
  "https://raw.githubusercontent.com/jeanphorn/wordlist/master/usernames.txt"; // provide file location

function getText(string) {
  if (inputSearch.value == 0) {
    txtSearch.innerHTML = "please write username in box search";
  } else {
    fetch(fileUrl)
      .then(function (response) {
        if (response.ok) {
          return response.text();
        } else {
          throw Error(response.status);
        }
      })

      .catch((error) => (txtError.innerHTML = +error))

      .then(function (data) {
        let search = data.search(string);
        if (search == -1) {
          let str = "Result : This name does not exist :(";
          let result = str.fontcolor("red");
          txtSearch.innerHTML = result;
        } else {
          txtSearch.innerHTML = "Result : This name exist :)";
        }
      });
  }
}

//Answer Five
let numberRandom = document.getElementById("txtNumberRandom");
let necimalNumberRandom = document.getElementById("txtDecimalNumberRandom");

function randomNumber() {
  let start = 1000;
  let end = 59999;
  let number = end - start;
  numberRandom.innerHTML = start + Math.floor(Math.random() * number);
  necimalNumberRandom.innerHTML =
    start + Math.random() * number;
}

//Answer six
let txtObject = document.getElementById("txtObject");
let array = [
  { key: "a", value: "b" },
  { key: "c", value: "d" },
  { key: "e", value: "f" },
];

//conver map
// let mapped = array.map((item) => ({ [item.key]: item.value }));
// let newObj = Object.assign({}, ...mapped);
// console.log(newObj);

//convert for
function converObj() {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i].key] = array[i].value;
  }
  console.log(result)
  txtObject.innerHTML = JSON.stringify(result);
}

 //Answer Seven
 let txtRange = document.getElementById("txtRange");
function mapRange(baseRange=[a,b] , targetRange=[a,b] , num) {
  if (num > baseRange[1] || num < targetRange[0]){
    txtRange.innerHTML = "please change number"
  }else{
    let t , aOne , aTwo , bOne , bTwo;
    aOne = baseRange[0];
    aTwo = baseRange[1];
    bOne = targetRange[0]
    bTwo = targetRange[1];
    t = bOne - 1 + ((num - aOne + 1) * (bTwo - bOne + 1)) / (aTwo - aOne + 1);
    txtRange.innerHTML = t
  }
}

//Answer Eight
let txtArray = document.getElementById("arrayShuffle");
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  txtArray.innerHTML ="Array Shuffle = " + "["+array+"]";
}
shuffleArray(arr);