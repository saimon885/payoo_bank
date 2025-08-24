// Log-Out
document.getElementById("log_out").addEventListener("click", function () {
  window.location.href = "./index.html";
});
// Log-Out

let pin = 1234;
let acnum = 12345678910;
document.getElementById("add_money").addEventListener("click", function (e) {
  e.preventDefault();
  // Selection
  const bank = document.getElementById("bank").value;
  const number = parseInt(document.getElementById("Bank-Number").value);
  const money = parseInt(document.getElementById("add-amount").value);
  const pinNum = parseInt(document.getElementById("Bank-pinNum").value);
  const availableMoney = parseInt(
    document.getElementById("Available-money").innerText
  );
  // Selection
  if (number !== acnum) {
    alert("Please probide valid account Number.!");
    return;
  }
  if (pinNum !== pin) {
    alert("Please probide a Valid PIN Number.!");
    return;
  }

  const totalMoney = money + availableMoney;
  document.getElementById("Available-money").innerText = totalMoney;
});
// cash out
document.getElementById("cash_out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const cashOutNum = parseInt(document.getElementById("Co-Number").value);
  const withDraw = parseInt(document.getElementById("Withdrow-Payment").value);
  const pinNum = parseInt(document.getElementById("Pin-num").value);
  const availableMoney = parseInt(
    document.getElementById("Available-money").innerText
  );
  if (cashOutNum !== acnum) {
    alert("Please probide valid account Number.!");
    return;
  }
  if (pinNum !== pin) {
    alert("Please probide a Valid PIN Number.!");
    return;
  }

  const oddMoney = availableMoney - withDraw;
  document.getElementById("Available-money").innerText = oddMoney;
});
// transer money
document.getElementById("Transfer").addEventListener("click", function (e) {
  e.preventDefault();
  const withDrawNum = parseInt(document.getElementById("w-Number").value);
  const withDrawAmount = parseInt(document.getElementById("w-amount").value);
  const withDrawPin = parseInt(document.getElementById("w-pin").value);
  const availableMoney = parseInt(
    document.getElementById("Available-money").innerText
  );
  if (withDrawNum !== acnum) {
    alert("Please valid account Number.!");
    return;
  }
  if (withDrawPin !== pin) {
    alert("Please probide a Valid PIN Number.!");
    return;
  }

  const TransferOdd = availableMoney - withDrawAmount;
  document.getElementById("Available-money").innerText = TransferOdd;
});
// cupon
document.getElementById("cupon-Btn").addEventListener("click", function (e) {
  e.preventDefault();
  const cuponNum = parseInt(document.getElementById("cupon-amount").value);
  const availableMoney = parseInt(
    document.getElementById("Available-money").innerText
  );
  const total = availableMoney + cuponNum;
  document.getElementById("Available-money").innerText = total;
});

// Pay bill
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const paynum = parseInt(document.getElementById("pay-number").value);
  const payamount = parseInt(document.getElementById("pay-amount").value);
  const payPin = parseInt(document.getElementById("pay-pin-Num").value);
  const availableMoney = parseInt(
    document.getElementById("Available-money").innerText
  );
  if (paynum !== acnum) {
    alert("Please valid account Number.!");
    return;
  }
  if (payPin !== pin) {
    alert("Please probide a Valid PIN Number.!");
    return;
  }
  let TransferOdd = availableMoney - payamount;
  if ((document.getElementById("Available-money").innerText = TransferOdd)) {
    alert("Bill Paid Successfully.");
    return;
  }
});

// toogleing
document
  .getElementById("add-money-toggle")
  .addEventListener("click", function () {
    const bankMoney = document.getElementById("bank-money");
    bankMoney.style.display = "block";
    const cashOut = document.getElementById("cash-out");
    cashOut.style.display = "none";
    const withdraw = document.getElementById("withdraw");
    withdraw.style.display = "none";
    document.getElementById("Cupon-div").style.display = "none";
    document.getElementById("pay-Bill-Div").style.display = "none";
    document.getElementById("transition").style.display = "none";
  });

document
  .getElementById("cash_out_Toggling")
  .addEventListener("click", function () {
    const cashOut = document.getElementById("cash-out");
    cashOut.style.display = "block";
    const bankMoney = document.getElementById("bank-money");
    bankMoney.style.display = "none";
    const withdraw = document.getElementById("withdraw");
    withdraw.style.display = "none";
    document.getElementById("Cupon-div").style.display = "none";
    document.getElementById("pay-Bill-Div").style.display = "none";
    document.getElementById("transition").style.display = "none";
  });

document
  .getElementById("withdraw-toogling")
  .addEventListener("click", function () {
    const withdraw = document.getElementById("withdraw");
    withdraw.style.display = "block";
    document.getElementById("bank-money").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("Cupon-div").style.display = "none";
    document.getElementById("pay-Bill-Div").style.display = "none";
    document.getElementById("transition").style.display = "none";
  });

document
  .getElementById("Cupon-toogling")
  .addEventListener("click", function () {
    document.getElementById("Cupon-div").style.display = "block";
    const withdraw = document.getElementById("withdraw");
    withdraw.style.display = "none";
    document.getElementById("bank-money").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("pay-Bill-Div").style.display = "none";
    document.getElementById("transition").style.display = "none";
  });
document
  .getElementById("payBill-Toggling")
  .addEventListener("click", function () {
    document.getElementById("pay-Bill-Div").style.display = "block";
    document.getElementById("Cupon-div").style.display = "none";
    const withdraw = document.getElementById("withdraw");
    withdraw.style.display = "none";
    document.getElementById("bank-money").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("transition").style.display = "none";
  });

document
  .getElementById("transaction-toggling")
  .addEventListener("click", function () {
    document.getElementById("pay-Bill-Div").style.display = "none";
    document.getElementById("Cupon-div").style.display = "none";
    const withdraw = document.getElementById("withdraw");
    withdraw.style.display = "none";
    document.getElementById("bank-money").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("transition").style.display = "block";
  });

document.getElementById("view-All").addEventListener("click",function(){
    document.getElementById("open-view").style.display = "block";
})
document.getElementById("tran").addEventListener("click",function(){
    document.getElementById("open-view").style.display = "none";
})