const form = document.getElementById('employee-form');
const statusSelect = document.getElementById('emp-status');
const reasonField = document.getElementById('absence-reason-feild');
statusSelect.addEventListener('change', function () {
  if (this.value === 'غائب') {
    reasonField.style.display = 'block';
    setTimeout(() => (reasonField.style.opacity = 1), 10);
  } else {
    reasonField.style.opacity = 0;
    setTimeout(() => (reasonField.style.display = 'none'), 400);
  }
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('emp-name').value;
  const code = document.getElementById('emp-code').value;
  const job = document.getElementById('emp-job').value;
  const status = document.getElementById('emp-status').value;
  const reason = document.getElementById('absence-reason').value;
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  const timestamp = `${time} | ${date}`;
  const employee = {
    name,
    code,
    job,
    present: status === 'حاضر' ? '✔' : '',
    absent: status === 'غائب' ? '✘' : '',
    reason: status === 'غائب' ? reason : '',
    timestamp,
  };
  const oldData = JSON.parse(localStorage.getItem('employees') || '[]');
  oldData.push(employee);
  localStorage.setItem('employees', JSON.stringify(oldData));
  location.reload();
});