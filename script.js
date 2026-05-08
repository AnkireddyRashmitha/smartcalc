console.log("SmartCalc Script Loaded!");

// BMI Calculation Logic
function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // convert cm to m

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        let category = "";

        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 25) category = "Normal";
        else if (bmi < 30) category = "Overweight";
        else category = "Obese";

        const resultBox = document.getElementById('bmi-result');
        resultBox.style.display = "block";
        resultBox.innerHTML = `Your BMI is <b>${bmi}</b> (${category})`;
    } else {
        alert("Please enter both weight and height!");
    }
}

// EMI Calculation Logic
function calculateEMI() {
    const amount = document.getElementById('amount').value;
    const resultBox = document.getElementById('emi-result');
    
    if(amount > 0) {
        resultBox.style.display = "block";
        resultBox.innerHTML = `EMI Feature Active for: $${amount}`;
    } else {
        alert("Please enter a loan amount!");
    }
}