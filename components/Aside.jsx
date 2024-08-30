import React from 'react';
import { FaTachometerAlt, FaFileAlt, FaTag, FaTruck, FaShoppingBag, FaPercent, FaUsers } from 'react-icons/fa';
import {NavLink, Routes, Route} from "react-router-dom";
import { AiOutlineFile } from 'react-icons/ai';


import '../css/adminlte.css'
import '../css/adminlte.min.css'
import '../css/custom.css'

import { useContext } from "react";
import { contextData } from "../Context/Context";



const Aside = () => {
  const asideOptions = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <FaTachometerAlt className="nav-icon" />,
      subOptions: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
    {
      name: "Category",
      link: "/categories",
      icon: <FaFileAlt className="nav-icon" />,
      subOptions: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
    {
      name: "Sub Category",
      link: "/subcategory",
      icon: <FaFileAlt className="nav-icon" />,
      subOptions: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
    {
      name: "Brands",
      link: "/brands",
      icon: <FaTag className="nav-icon" />,
      subOptions: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
    {
      name: "Products",
      link: "",
      icon: <FaTag className="nav-icon" />,
      subOptions: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
    {
      name: "Shipping",
      link: "",
      icon: <FaTruck className="nav-icon" />,
      subOptions: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
    {
      name: "Orders",
      link: "",
      icon: <FaShoppingBag className="nav-icon" />,
      subOptions: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
    {
      name: "Discount",
      link: "",
      icon: <FaPercent className="nav-icon" />,
      subOptions: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
    {
      name: "Users",
      link: "",
      icon: <FaUsers className="nav-icon" />,
      subOptions: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
    {
      name: "Pages",
      link: "",
      icon: <AiOutlineFile className="nav-icon" />,
      subOptions: [
        { name: "Overview", link: "/dashboard/overview" },
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Reports", link: "/dashboard/reports" },
      ],
    },
  ];

  {
    /* <FaTachometerAlt className="nav-icon" /> */
  }

  const ContextData = useContext(contextData);

  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        width: ContextData.asideWidth,
        transition: ".4s ease",
      }}
    >
      {/* Brand Logo */}
      <a href="#" className="brand-link">
        <img
          src="https://cdn-icons-png.flaticon.com/128/6024/6024190.png"
          alt="Admin Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        {/* <span className="brand-text font-weight-light">LARAVEL SHOP</span> */}
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user (optional) */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {asideOptions.map((elem) => {
              return (
                <>
                  <li className="nav-item">
                    <NavLink to={elem.link} className="nav-link link">
                      {/* <FaTachometerAlt className="nav-icon" /> */}
                      {elem.icon}
                      <p>{elem.name}</p>
                      {/* ------- */}
                    </NavLink>
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Aside;
