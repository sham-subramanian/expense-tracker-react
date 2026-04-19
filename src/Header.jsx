// Header.jsx — extracted from the repeated <header> block in all 4 HTML files
// Props: navigate (fn), activePage (string) — replaces hardcoded <a href="..."> links

export default function Header({ navigate, activePage }) {
  return (
    <header className="header">
      <h1>Smart Expense Tracker &amp; Budget Planner</h1>
      <div className="nav-bar">
        {/* Each nav item calls navigate() instead of following an <a href> */}
        <nav onClick={() => navigate("dashboard")} style={{ cursor: "pointer" }}>
          {activePage === "dashboard" ? "Dashboard" : <span>Dashboard</span>}
        </nav>
        <nav onClick={() => navigate("expense")} style={{ cursor: "pointer" }}>
          {activePage === "expense" ? "Add Expense" : <span>Add Expense</span>}
        </nav>
        <nav>Analytics</nav>
        <nav onClick={() => navigate("settings")} style={{ cursor: "pointer" }}>
          {activePage === "settings" ? "Settings" : <span>Settings</span>}
        </nav>
      </div>
      {/* .Deshboard-div button — was <a href="/index.html"> or <a href="/Desboard.html"> */}
      <div className="Deshboard-div" onClick={() => navigate("home")} style={{ cursor: "pointer" }}>
        Home
      </div>
    </header>
  );
}
