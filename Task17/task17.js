let salary = parseInt(prompt("Nhập thu thập của bạn: "));
function taxSalary(salary) {
  if (isNaN(salary) || salary < 0) {
    return "Thu nhập không hợp lệ";
  }
  let tax = 0;
  if (salary <= 11000000) {
    tax = 0;
  } else if (salary <= 25000000) {
    tax = (salary - 11000000) * 0.05;
  } else if (salary <= 50000000) {
    tax = (25000000 - 11000000) * 0.05 + (salary - 25000000) * 0.1;
  } else if (salary <= 80000000) {
    tax =
      (25000000 - 11000000) * 0.05 +
      (50000000 - 25000000) * 0.1 +
      (salary - 50000000) * 0.2;
  } else {
    tax =
      (25000000 - 11000000) * 0.05 +
      (50000000 - 25000000) * 0.1 +
      (80000000 - 50000000) * 0.2 +
      (salary - 80000000) * 0.3;
  }

  return tax;
}
function calculateTax() {
  const result = taxSalary(salary);
  document.getElementById("result").innerText = `Thuế phải nộp: ${result}`;

}
calculateTax();

