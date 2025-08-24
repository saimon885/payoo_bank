// Login page
document.getElementById("clickBtn").addEventListener("click", function (e) {
  // e.preventDefault() ---> btn-reload solution
  e.preventDefault();
  const Number = 12345678910;
  const pin = 1234;
  const MobileNumber = document.getElementById("Inp-Number").value;
  const PinNumber = document.getElementById("Inp-Pin").value;
  const MobileNumberconvert = parseInt(MobileNumber); //kono number ke int e convert korte use hoy
  const pinNumberconvert = parseInt(PinNumber);
  if (MobileNumberconvert === Number && pinNumberconvert === pin) {
    window.location.href = "./home.html"; //--> Next page e near jonno eii code use hoy
  } else {
    alert("Invalid Credentials");
  }
});
