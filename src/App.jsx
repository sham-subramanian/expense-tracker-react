import { useState } from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import AddExpense from "./AddExpense";
import Settings from "./Settings";
import "./styles/style.css";
import "./styles/Dashboard.css";
import "./styles/Expense.css";
import "./styles/setting.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const navigate = (page) => setCurrentPage(page);
  return (
    <>
      {currentPage === "home" && <Home navigate={navigate} />}
      {currentPage === "dashboard" && <Dashboard navigate={navigate} />}
      {currentPage === "expense" && <AddExpense navigate={navigate} />}
      {currentPage === "settings" && <Settings navigate={navigate} />}
    </>
  );
}
