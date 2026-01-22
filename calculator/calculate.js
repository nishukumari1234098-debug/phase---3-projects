let selectedTipPercent = 15;

function selectTip(percent){
    selectedTipPercent = percent;

    let allButtons = document.querySelectorAll('.tip-btn');
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove('active');
    }

    event.target.classList.add('active');

    if(percent === 0){
        document.getElementById('customTip').focus();
    }
}



function calculateTip(){
    let billAmount = document.getElementById('billAmount').value;

    let tipPercent = selectedTipPercent;
    let customTip = document.getElementById('customTip').value;


    if(customTip !== "" && customTip > 0){
        tipPercent = customTip;
    }


    let numPeople = document.getElementById('numPeople').value;

    if(billAmount === "" || billAmount <= 0){
        alert("Please enter a valid bill amount!");
        return;
    }

    if(numPeople === "" || numPeople <= 0){
        alert("Please enter number of people!");
        return;
    }


    billAmount = parseFloat(billAmount);
    tipPercent = parseFloat(tipPercent);
    numPeople = parseInt(numPeople);

    let tipAmount = (billAmount * tipPercent) / 100;

    let totalAmount = billAmount + tipAmount;

    let tipPerPerson = tipAmount / numPeople;
    let totalPerPerson = totalAmount / numPeople;



    document.getElementById('tipAmount').textContent = "₹" + tipAmount.toFixed(2);
    document.getElementById('tipPerPerson').textContent = "₹" + tipPerPerson.toFixed(2);
    document.getElementById('totalAmount').textContent = "₹" + totalAmount.toFixed(2);
    document.getElementById('totalPerPerson').textContent = "₹" + totalPerPerson.toFixed(2);
}