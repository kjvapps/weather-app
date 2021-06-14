import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <main>
      <GlobalStyles />
      <Dashboard />
      {/* <Header />
      <Content />
      <Footer /> */}
    </main>
  );
}

export default App;
