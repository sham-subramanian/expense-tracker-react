import { useState, useEffect } from "react";

export default function Dashboard({ navigate }) {
  const [totalIncome, setTotalIncome] = useState("$0");
  const [totalExpenses, setTotalExpenses] = useState("$0");
  const [remainingBudget, setRemainingBudget] = useState("$0");

  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const savedBudget = localStorage.getItem("monthlyBudget");
    const savedcurrency = localStorage.getItem("currency");
    let currencySymbol = "";

    if (savedBudget && savedcurrency) {
      if (savedcurrency.toLowerCase() === "dollar") {
        currencySymbol = "$";
      } else if (savedcurrency.toLowerCase() === "rupee") {
        currencySymbol = "₹";
      } else {
        alert("unknown currency,only Indian Rupee and US Dollar are supported");
        return;
      }
      setTotalIncome(currencySymbol + savedBudget);
      setRemainingBudget(currencySymbol + savedBudget);
      setTotalExpenses(currencySymbol + "0");
    }
    const Expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses([...Expenses].reverse());

    if (Expenses.length > 0) {
      const totalAmt = Expenses.reduce((acc, expense) => acc + expense.amount, 0);
      setTotalExpenses(currencySymbol + " " + totalAmt);
      const remaining = parseFloat(savedBudget) - totalAmt;
      setRemainingBudget(currencySymbol + " " + remaining.toFixed(2));
    }
  }, []);

  const handleReset = () => {
    setTotalIncome("$0");
    setRemainingBudget("$0");
    setTotalExpenses("$0");
    setExpenses([]);
    localStorage.setItem("monthlyBudget", 0);
    localStorage.setItem("currency", "");
    localStorage.setItem("expenses", JSON.stringify([]));
  };

  return (
    <>
      <header className="header">
        <h1>Smart Expense Tracker &amp; Budget Planner</h1>
        <div className="nav-bar">
          <nav>Dashboard</nav>
          <nav onClick={() => navigate("expense")} >Add Expense</nav>
          {/* <nav>Analytics</nav> */}
          <nav onClick={() => navigate("settings")} >Settings</nav>
        </div>
        <div className="Deshboard-div" onClick={() => navigate("home")} >
          Home
        </div>
      </header>
      <main>
        <section className="Budget-Section">
          <div className="cash-div">
            <h1>{totalIncome}</h1>
            <p>total income</p>
          </div>
          <div className="cash-div">
            <h1>{totalExpenses}</h1>
            <p>total Expences</p>
          </div>
          <div className="cash-div">
            <h1>{remainingBudget}</h1>
            <p>Remaining Budget</p>
          </div>
        </section>

        <section className="Reset-Setting">
          <button id="reset-btn" onClick={handleReset}>Reset</button>
        </section>

        <section className="recent-transactions">
          <h1>Recent Activity</h1>
          <div>
            <ul id="transitions-list">
              {expenses.map((el, index) => (
                <li key={index}>
                  <p>{el.date}</p>
                  <h3>{el.name}</h3>
                  <p>-{el.amount}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
