//console.log(userName);
const userName = document.querySelector("#user_name");
const apiKey = document.querySelector("#api_key");
const apiSecret = document.querySelector("#api_secret");
const btnSubmit = document.querySelector("#btn-submit");
const alertBox = document.querySelector("#alert-box");

const sendToServer = () => {
  // 1- get data
  const _username = userName.value;
  const _apikey = apiKey.value;
  const _apisecret = apiSecret.value;

  if (_username && _apikey && _apisecret) {
    //alertBox.classList.toggle("alertError");
    console.log("yes");
  } else {
    alertBox.classList.toggle("alert-error");
    console.log("no");
  }
};

btnSubmit.addEventListener("click", sendToServer);
