import { useState } from "react";

export default function AddExpense({ navigate }) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expenseAmount || !expenseName || !expenseDate) {
      alert("please fill all the feilds");
      return;
    }
    let newExpense = {
      name: expenseName,
      amount: Number(expenseAmount),
      date: expenseDate,
    };

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    setSaveMessage("Expense saved successfully!");
    setTimeout(() => {
      setSaveMessage("");
      navigate("dashboard");
    }, 3000);
    setExpenseName("");
    setExpenseAmount("");
    setExpenseDate("");
  };

  return (
    <>
      <header className="header">
        <h1>Smart Expense Tracker &amp; Budget Planner</h1>
        <div className="nav-bar">
          <nav onClick={() => navigate("dashboard")} style={{ cursor: "pointer" }}>Dashboard</nav>
          <nav>Add Expense</nav>
          {/* <nav>Analytics</nav> */}
          <nav onClick={() => navigate("settings")} style={{ cursor: "pointer" }}>Settings</nav>
        </div>
        <div className="Deshboard-div" onClick={() => navigate("home")} style={{ cursor: "pointer" }}>
          Home
        </div>
      </header>
      <main>
        <section className="Expense-Section">
          <form id="Expense-form" onSubmit={handleSubmit}>
            <div className="form-div">
              <div className="head">
                <h2>Add Expense</h2>
              </div>
              <div className="Expense-name">
                <label>Expense Name</label>
                <input
                  placeholder="eg.Coffie,Groceries"
                  id="expense-name"
                  value={expenseName}
                  onChange={(e) => setExpenseName(e.target.value)}
                />
              </div>
              <div className="Expense-name">
                <label>Amount</label>
                <input
                  placeholder="0.00"
                  id="expense-amount"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                />
              </div>
              <div className="Expense-name">
                <label>Date</label>
                <input
                  type="date"
                  id="expense-date"
                  value={expenseDate}
                  onChange={(e) => setExpenseDate(e.target.value)}
                />
              </div>

              <div className="Expense-div">
                <button id="Expense-btn">Submit Expence</button>
              </div>
            </div>
          </form>
        </section>
      </main>
      <p
        id="save-message"
        style={{
          color: "green",
          textAlign: "center",
          padding: "30px",
          transition: "all 0.6s ease",
          position: "fixed",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
        }}
      >
        {saveMessage}
      </p>
    </>
  );
}
