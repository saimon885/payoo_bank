let pin = 1234;
let acnum = 1234567890;
document.getElementById('add_money').addEventListener('click',function(e){
    e.preventDefault();
    // Selection
    const bank = document.getElementById("bank").value;
    const number = parseInt(document.getElementById("Bank-Number").value);
    const money = parseInt(document.getElementById("add-amount").value);
    const pinNum = parseInt(document.getElementById("Bank-pinNum").value);
    const availableMoney = parseInt(document.getElementById("Available-money").innerText);
    // Selection
    if(number !== acnum){
        alert("Please valid account Number.!");
        return
    }
    if(pinNum !== pin){
        alert("Please probide a Valid PIN Number.!")
        return
    }


    const totalMoney = money+availableMoney;
    document.getElementById("Available-money").innerText = totalMoney;


})