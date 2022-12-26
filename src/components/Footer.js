import * as React from "react";

const Footer = (props) => {
  return (
    <section className="container mx-auto px-8">
      <div className="py-5 flex items-center border-t-2 justify-between">
        <div>Copyright &copy; 2012 - {new Date().getFullYear()}.</div>
      </div>
    </section>
  );
};

export default Footer;
