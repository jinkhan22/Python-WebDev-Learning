let expenses = [];

// DOM elements
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addExpense");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

let editIndex = -1;

// 🔹 Load saved expenses when app starts
window.onload = () => {
  const saved = localStorage.getItem("expenses");
  if (saved) {
    expenses = JSON.parse(saved); // convert back to array
    renderExpenses();
  }
};

addBtn.addEventListener("click", () => {
  let title = titleInput.value;
  let amount = Number(amountInput.value);

  if (title && amount > 0) {
    if (editIndex === -1) {
      let expense = { title, amount };
      expenses.push(expense);
    } else {
      expenses[editIndex].title = title;
      expenses[editIndex].amount = amount;
      editIndex = -1;
      addBtn.textContent = "Add Expense";
    }

    saveExpenses();   // 🔹 save after add/edit
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

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
      titleInput.value = exp.title;
      amountInput.value = exp.amount;
      editIndex = i;
      addBtn.textContent = "Save Changes";
    });

    // Delete Button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");
    delBtn.addEventListener("click", () => {
      if (confirm(`Delete "${exp.title}"?`)) {
        expenses.splice(i, 1);
        saveExpenses();   // 🔹 save after delete
        renderExpenses();
      }
    });

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    expenseList.appendChild(li);

    total += exp.amount;
  });

  totalDisplay.textContent = `Total: $${total}`;
}

// 🔹 Save to localStorage
function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function clearForm() {
  titleInput.value = "";
  amountInput.value = "";
}
