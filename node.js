document.getElementById('addButton').addEventListener('click', function() {
    // Get input values
    const num1Text = document.getElementById('input1').value.trim().toLowerCase();
    const num2Text = document.getElementById('input2').value.trim().toLowerCase();
    
    // Convert word to number
    const wordToNumber = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
    };
    
    // Validate and convert inputs
    let num1, num2;
    let isValid = true;
    
    if (num1Text in wordToNumber) {
        num1 = wordToNumber[num1Text];
    } else {
        document.getElementById('result').textContent = 'First input is not a valid number word (zero to nine)';
        isValid = false;
    }
    
    if (num2Text in wordToNumber) {
        num2 = wordToNumber[num2Text];
    } else if (isValid) {
        document.getElementById('result').textContent = 'Second input is not a valid number word (zero to nine)';
        isValid = false;
    }
    
    // If inputs are valid, calculate and display result
    if (isValid) {
        const sum = num1 + num2;
        document.getElementById('result').textContent = `${num1Text} + ${num2Text} = ${sum}`;
    }
});