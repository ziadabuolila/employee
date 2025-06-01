const tbody = document.getElementById('employee-table-body');
let employees = JSON.parse(localStorage.getItem('employees') || '[]');
function renderTable() {
tbody.innerHTML = '';
employees.forEach((emp, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${emp.name}</td>
    <td>${emp.code}</td>
    <td>${emp.job}</td>
    <td>${emp.present}</td>
    <td>${emp.absent}</td>
    <td>${emp.reason}</td>
    <td>${emp.timestamp}</td>
    <td><button onclick="deleteRow(${index})" style="cursor: pointer; background: none; border: none; font-size: 18px;">🗑️</button></td>
    `;
    tbody.appendChild(row);
});
}
function deleteRow(index) {
if (confirm("هل أنت متأكد من حذف هذا السجل؟")) {
    employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(employees));
    renderTable();
}
}
renderTable();