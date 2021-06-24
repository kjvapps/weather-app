import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
