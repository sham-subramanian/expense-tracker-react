
export default function Home({ navigate }) {
  return (
    <>
      <header className="header" style={{ backgroundColor: "#f0f2f3" }}>
        <h1>Smart Expense Tracker &amp; Budget Planner</h1>
        <div className="nav-bar">
          <nav onClick={() => navigate("dashboard")}>Dashboard</nav>
          <nav onClick={() => navigate("expense")}>Add Expense</nav>
          {/* <nav>Analytics</nav> */}
          <nav onClick={() => navigate("settings")}>Settings</nav>
        </div>
        <div className="Dashboard-div" onClick={() => navigate("dashboard")}>
          Dashboard
        </div>
      </header>
      <main>
        <section className="hero">
          <section className="content-section">
            <h1 className="content">
              Track Smarter.<br />
              Spend Better.
            </h1>
            <p>
              Take control of your finance with smart expence tracking and intelligent budget planning designed for modern lifestyles.
            </p>
            <section>
              <button className="start-btn" onClick={() => navigate("settings")}>
                Get Started
              </button>
              <button className="Dashboard-btn" onClick={() => navigate("dashboard")}>
                View Dashboard
              </button>
            </section>
          </section>
        </section>
        <section className="Features">
          <section className="feature-section">
            <div className="Feature-div">
              <h2>Track Daily Expenses </h2>
              <p>Log every transaction effortlessly with</p>
              <p>categorization and instant budget updates</p>
            </div>
            <div className="Feature-div">
              <h2>Visual Analytics</h2>
              <p>See where your money goes with interactive pie charts</p>
              <p>and monthly spending trends</p>
            </div>
            <div className="Feature-div">
              <h2>Smart Budgeting</h2>
              <p>Get monthly limits,monitor remaining funds and recevie</p>
              <p>alerts before overspending</p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
