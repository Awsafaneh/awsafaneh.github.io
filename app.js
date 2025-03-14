import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// صفحات الموقع
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ChatBot from "./components/ChatBot";

function App() {
  const [isBotActive, setIsBotActive] = useState(false);

  useEffect(() => {
    // تنشيط الشات بوت بمجرد تحميل الصفحة
    setIsBotActive(true);
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <h1>Aws Afaneh</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>

        {isBotActive && <ChatBot />}
      </div>
    </Router>
  );
}

export default App;
