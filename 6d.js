function addToTheTable() {
    phoneInput = document.getElementById('phoneInput');
    emailInput = document.getElementById('emailInput');
    if (phoneInput.value != "" && emailInput.value != "") {
        let table = document.getElementById('table');
        let row = document.createElement('tr');
        let column = document.createElement('td');
        let column1 = document.createElement('td');
        column.textContent = phoneInput.value;
        column1.textContent = emailInput.value;
        row.appendChild(column);
        row.appendChild(column1);
        table.appendChild(row);
        phoneInput.value = '';
        emailInput.value = '';
    } else
        alert("Not all fields complete");
}