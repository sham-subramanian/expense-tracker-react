import { useState } from "react";
export default function Settings({ navigate }) {
  const [budgetInput, setBudgetInput] = useState("");
  const [currencyInput, setCurrencyInput] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const budget = budgetInput;
    const currency = currencyInput;
    if (budget === "" || currency === "") {
      alert("Please fill the feilds");
      return;
    }

    localStorage.setItem("monthlyBudget", budget);
    localStorage.setItem("currency", currency);
    setMessage("Setting changed successfully");
    setTimeout(() => {
      setMessage("");
    }, 3000);
    setBudgetInput("");
    setCurrencyInput("");
  };

  return (
    <>
      <header className="header">
        <h1>Smart Expense Tracker &amp; Budget Planner</h1>
        <div className="nav-bar">
          <nav onClick={() => navigate("dashboard")} style={{ cursor: "pointer" }}>Dashboard</nav>
          <nav onClick={() => navigate("expense")} style={{ cursor: "pointer" }}>Add Expense</nav>
          {/* <nav>Analytics</nav> */}
          <nav>Settings</nav>
        </div>
        <div className="Deshboard-div" onClick={() => navigate("dashboard")} style={{ cursor: "pointer" }}>
          Home
        </div>
      </header>
      <main>
        <form id="settings-form" onSubmit={handleSubmit}>
          <div className="setting-div">
            <div className="title">
              <h3>Settings</h3>
            </div>
            <div className="input-div">
              <label>Monthly Budget</label>
              <input
                placeholder="Enter your Budget"
                id="budget-input"
                value={budgetInput}
                onChange={(e) => setBudgetInput(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label>Currency</label>
              <input
                placeholder="$  USD - US Dollar"
                id="currency-input"
                value={currencyInput}
                onChange={(e) => setCurrencyInput(e.target.value)}
              />
            </div>

            <div className="btn-div">
              <button id="save-btn">Save Settings</button>
            </div>
          </div>
        </form>
      </main>
      <p
        id="save-message"
        style={{
          color: "green",
          textAlign: "center",
          padding: "30px",
          transition: "all 0.6s ease",
        }}
      >
        {message}
      </p>
    </>
  );
}
