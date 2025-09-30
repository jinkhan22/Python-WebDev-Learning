let expenses = [];

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addExpense");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

addBtn.addEventListener("click", () => {
  let title = titleInput.value;
  let amount = Number(amountInput.value);

  if (title && amount > 0) {
    let expense = { title, amount };
    expenses.push(expense);

    renderExpenses();
    clearForm();
  } else {
    alert("❌ Please enter valid expense and amount.");
  }
});

function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach((exp, i) => {
    let li = document.createElement("li");
    li.textContent = `${exp.title}: $${exp.amount}`;
    expenseList.appendChild(li);
    total += exp.amount;
  });

  totalDisplay.textContent = `Total: $${total}`;
}

function clearForm() {
  titleInput.value = "";
  amountInput.value = "";
}
