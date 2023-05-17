const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();
    const income = document.querySelector("#income").value;
    const house = document.querySelector("#house").value;
    const transport = document.querySelector("#transport").value;
    const food = document.querySelector("#food").value;
    const entertainment = document.querySelector("#entertainment").value;
    
    // 1) А здесь в консоли выводит не сумму чисел, а строку, т.е. 2+3 не 5, а 23, хотя точно также было у нас в создании калькулятора и все работало, поэтому пришлось поставить метод parseInt() 
    let totalExpenses = parseInt(house) + parseInt(transport) + parseInt(entertainment) + parseInt(food);  
    
    // 2) totalExpenses = totalExpenses.toFixed(2); - здесь вообще выдает ошибку, что это не функция и не работает 
    
    let amountLeft = (income - totalExpenses) / income * 100;

    // 3) amountLeft = amountLeft.toFixed(2);
    

        // Еще я хотела, чтобы в каждом окне выводило цифру процента, который остается после арифметических действий. Но выводит во втором и третьем окне одновременно.
        // Т.е. цвет меняется как надо, но цифра дублируется в двух окнах
    if(amountLeft <= 10){
        document.querySelector(".one").style.backgroundColor = "#FC4F00";
        // document.querySelector("#result").textContent = amountLeft
    }
    else if (amountLeft <= 40 && amountLeft >= 10){
        document.querySelector(".two").style.backgroundColor = "#E5D1FA";
        // document.querySelector("#result2").textContent = amountLeft
    }
    else if (amountLeft > 40)
        document.querySelector(".three").style.backgroundColor = "#3CCF4E";
        // document.querySelector("#result3").textContent = amountLeft
    }
    

