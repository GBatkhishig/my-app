import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-8">{props.children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
