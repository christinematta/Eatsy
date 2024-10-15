import { useState } from "react";
import { assets } from "../../assets/assets";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import { food_list } from "../../assets/assets";


import "./NavBar.css";

const menuItems = [
  { name: "Home", id: "home", href: "/" },
  { name: "Menu", id: "menu", href: "/#explore-menu" },
  { name: "Mobile-app", id: "mobile-app", href: "/#app-download" },
  { name: "Contact us", id: "contact-us", href: "/#footer" },
];

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { cartItems, totalCartItems } = useContext(StoreContext);
  const navigate = useNavigate();
  const isCartEmpty = !food_list.some((item) => cartItems[item._id] > 0);

  const handleMenuClick = (item) => {
    setMenu(item.id);  // Update the state
    navigate(item.href);  // Navigate to the desired path
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        {menuItems.map((item) =>
          item.name === "Home" ? (
            <Link
              to="/"
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={menu === item.id ? "active" : ""}
            >
              {item.name}
            </Link>
          ) : (
            <a
              href={item.href}
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={menu === item.id ? "active" : ""}
            >
              {item.name}
            </a>
          )
        )}
      </ul>

      <div className="navbar-right">
        <IoSearchOutline className="icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <IoCartOutline className="icon" />
          </Link>
          {isCartEmpty ? (
            <></>
          ) : (
            <div className="dot">
              <p>{totalCartItems()}</p>
            </div>
          )}
        </div>

        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default NavBar;
