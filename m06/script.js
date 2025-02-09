let userNumber = prompt("Enter a number between 0 and 10:", "0");

if (userNumber === null || isNaN(userNumber) || userNumber === "") {
    userNumber = 0;
} else {
    userNumber = parseInt(userNumber);
}

userNumber = Math.max(0, Math.min(10, userNumber));

let msg = '<h2>Multiplication Table</h2>';

msg += "<table>";
msg += "<thead><tr><th></th><th>x " + userNumber + "</th></tr></thead>"; 
msg += "<tbody>";

for (let i = 1; i <= 9; i++) {
    msg += `<tr><td>${i}</td><td>${i * userNumber}</td></tr>`; 
}

msg += "</tbody>";
msg += "</table>";

document.getElementById('results').innerHTML = msg;
