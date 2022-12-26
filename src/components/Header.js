import * as React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const menu = [
    {
      title: "Ерөнхий",
      href: "/",
    },
    {
      title: "Цөлжилт",
      href: "/2",
    },
    {
      title: "Газарзүйн",
      href: "/3",
    },
    {
      title: "Мониторинг",
      href: "/4",
    },
    {
      title: "Холбоос",
      href: "/5",
    },
    {
      title: "Холбоо барих",
      href: "/6",
    },
  ];
  return (
    <section className="container mx-auto px-8">
      <div className="flex justify-between items-center py-5">
        <div>
          <img src="/h-logo.png" />
        </div>
        <div>
          <img src="/h-logo-2.png" />
        </div>
      </div>
      <div className="py-5 flex flex-col lg:flex-row items-center border-y-2 justify-between border-[#cc6600]">
        <div>
          <Link to="/">
            <h3 className="font-bold text-3xl selection-none text-center lg:text-left mb-10 lg:mb-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d3801] to-[#cc6600]">
                Цөлжилт
              </span>
              ийн <br /> Мэдээллийн Сан
            </h3>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          {menu?.map((m, index) => (
            <NavLink
              key={`menu-${index}`}
              to={m.href}
              className="uppercase rounded-[2px] px-2 py-1  transition-all hover:underline underline-offset-4"
              activeClassName="uppercase bg-gradient-to-r text-white rounded-[2px] px-2 py-1 from-[#9d3801] to-[#cc6600] transition-all hover:underline underline-offset-4"
            >
              {m.title}
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
