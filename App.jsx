import React from 'react'



import {Link, Routes, Route} from "react-router-dom";
import Aside from './components/Aside';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import DataView from './components/simlarView/DataView';
import CreateNew from './components/simlarView/CreateNew';
import Register from './components/Login/Register'






function App() {

  return (
    <>
      <div className="wrapper" style={{ width: "100vw" }}>
        <Routes>
          {/* HOME ROUTE  */}
          <Route path="/" element={<Register></Register>}></Route>{" "}
          {/* DASHBOARD ROUTE  */}
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar></Navbar>
                <Aside></Aside>
                <Dashboard></Dashboard>
              </>
            }
          ></Route>{" "}
          {/* CATEGORIES ROUTE */}
          <Route
            path="/categories"
            element={
              <>
                <Navbar></Navbar>
                <Aside></Aside>
                <DataView
                  path={"/create-category"}
                  MenuBtn={"New Category"}
                  pageName={"Category"}
                ></DataView>
              </>
            }
          ></Route>
          {/* SUB CATEGORIES ROUTE */}
          <Route
            path="/subcategory"
            element={
              <>
                <Navbar></Navbar>
                <Aside></Aside>
                <DataView
                  path={"/create-subcategory"}
                  MenuBtn={"New Sub Category"}
                  pageName={"Sub Category"}
                ></DataView>
              </>
            }
          ></Route>
          {/* BRAND ROUTE */}
          <Route
            path="/brands"
            element={
              <>
                <Navbar></Navbar>
                <Aside></Aside>
                <DataView
                  path={"/create-brand"}
                  MenuBtn={"New Brand"}
                  pageName={"Brands"}
                ></DataView>
              </>
            }
          ></Route>
          {/* ---------------- */}
          {/* WHEN CLICK ON "CREATE NEW CATEGORIES" */}
          <Route
            path="/create-category"
            element={
              <>
                <Navbar></Navbar>
                <Aside></Aside>
                <CreateNew isCategoryHeader={0}></CreateNew>
              </>
            }
          ></Route>
          {/* WHEN CLICK ON "CREATE NEW SUB CATEGORIES" */}
          <Route
            path="/create-subcategory"
            element={
              <>
                <Navbar></Navbar>
                <Aside></Aside>
                <CreateNew isCategoryHeader={1}></CreateNew>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}
export default App