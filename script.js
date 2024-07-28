// Function to calculate and display bookstore credit based on GPA
function calculateCredit() {
    // Get the input values
    const name = document.getElementById('name').value.trim();
    const gpa = parseFloat(document.getElementById('gpa').value);

    // Check if the inputs are valid
    if (name === '' || isNaN(gpa) || gpa < 0 || gpa > 4.0) {
        document.getElementById('result').textContent = 'Please enter valid inputs.';
        return;
    }

    // Determine the credit based on GPA
    let credit;
    if (gpa >= 3.5) {
        credit = 100;
    } else if (gpa >= 3.0) {
        credit = 75;
    } else if (gpa >= 2.5) {
        credit = 50;
    } else {
        credit = 25;
    }

    // Display the result
    document.getElementById('result').textContent = `${name}, your bookstore credit is $${credit}.`;
}
