window.onload = function(){
    const display = this.document.getElementById("display");
    const btnMadd = document.getElementById('btnMadd');
    const btnMC = document.getElementById('btnMC');
    const btnMkick = document.getElementById('btnMkick');
    const btnDiv = document.getElementById('btnDiv');
    const btnseven = document.getElementById('btnseven');
    const btnEight = document.getElementById('btnEight');
    const btnNine = document.getElementById('btnNine');
    const btnMult = document.getElementById('btnMult');
    const btnFour = document.getElementById('btnFour');
    const btnFive = document.getElementById('btnFive');
    const btnSix = document.getElementById('btnSix');
    const btnLess = document.getElementById('btnLess');
    const btnOne = document.getElementById('btnOne');
    const btnTwo = document.getElementById('btnTwo');
    const btnThree = document.getElementById('btnThree');
    const btnSum = document.getElementById('btnSum');
    const btnClear = document.getElementById('btnClear');
    const btnCero = document.getElementById('btnCero');
    const btnPoint = document.getElementById('btnPoint');
    const btnEqual = document.getElementById('btnEqual');

    numeroOnclck = function (evento){
        const valor=parseFloat(evento.target.textContent);
        display.innerText = valor
    }
    borrar =function(evento){
        display.innerText="" 
    }
    btnClear.onclick = borrar
    btnCero.onclick = numeroOnclck
    btnOne.onclick = numeroOnclck
    btnTwo.onclick = numeroOnclck
    btnThree.onclick = numeroOnclck
    btnFour.onclick = numeroOnclck
    btnFive.onclick = numeroOnclck
    btnSix.onclick = numeroOnclck
    btnseven.onclick = numeroOnclck
    btnEight.onclick = numeroOnclck
    btnNine.onclick = numeroOnclck
    btnPoint.onclick = numeroOnclck

    let firstValue
    let selectedOperator
    let secondValue
    operacion =function(evento) {
        firstValue =  parseFloat(display.innerText)
        display.innerText= ""
        selectedOperator = event.target.textContent
        
    }
    btnLess.onclick = operacion
    btnSum.onclick = operacion
    btnMult.onclick = operacion
    btnDiv.onclick = operacion
    

    btnEqual.onclick = function(event) {
        secondValue = parseFloat(display.innerText)
        let result
        switch (selectedOperator) {
            case "+":
                result= firstValue + secondValue
                break;
            case "-":
                result= firstValue - secondValue
            break;
            case "*":
                result= firstValue * secondValue
                break;
            case "/":
                result= firstValue / secondValue
                break;
        
            default:
                break;
        }
        display.innerText = result 
    }
    

}