// Log-Out
document.getElementById("log_out").addEventListener("click",function(){
    window.location.href = "./index.html";
})
// Log-Out


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


});
// cash out
document.getElementById("cash_out-btn").addEventListener('click',function(e){
    e.preventDefault();
    const cashOutNum = parseInt(document.getElementById("Co-Number").value);
    const withDraw = parseInt(document.getElementById("Withdrow-Payment").value);
    const pinNum = parseInt(document.getElementById("Pin-num").value);
    const availableMoney = parseInt(document.getElementById("Available-money").innerText);
    if(cashOutNum !== acnum){
        alert("Please valid account Number.!");
        return
    }
    if(pinNum !== pin){
        alert("Please probide a Valid PIN Number.!")
        return
    }

    const oddMoney = availableMoney - withDraw;
    document.getElementById("Available-money").innerText = oddMoney;

})

// toogleing
document.getElementById("add-money-toggle").addEventListener("click",function(){
    const bankMoney = document.getElementById("bank-money");
    bankMoney.style.display = 'block';
    const cashOut = document.getElementById("cash-out");
    cashOut.style.display = 'none';
});

document.getElementById("cash_out_Toggling").addEventListener("click",function(){
    const cashOut = document.getElementById("cash-out");
    cashOut.style.display = 'block';
    const bankMoney = document.getElementById("bank-money");
    bankMoney.style.display = 'none';
});

