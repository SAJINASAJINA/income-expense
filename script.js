function calculateBalance() {
  // Get Income values
  let income1 = parseFloat(document.getElementById("income1").value) || 0;
  let income2 = parseFloat(document.getElementById("income2").value) || 0;
  let income3 = parseFloat(document.getElementById("income3").value) || 0;

  // Get Expense values
  let expense1 = parseFloat(document.getElementById("expense1").value) || 0;
  let expense2 = parseFloat(document.getElementById("expense2").value) || 0;
  let expense3 = parseFloat(document.getElementById("expense3").value) || 0;

  // Calculate total income and expenses
  let totalIncome = income1 + income2 + income3;
  let totalExpenses = expense1 + expense2 + expense3;
  let balance = totalIncome - totalExpenses;

  // Display results
  document.getElementById("totalIncome").innerText =
    "Total Income: $" + totalIncome.toFixed(2);
  document.getElementById("totalExpenses").innerText =
    "Total Expenses: $" + totalExpenses.toFixed(2);
  document.getElementById("balance").innerText =
    "Balance: $" + balance.toFixed(2);
}
