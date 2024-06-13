// import { useState } from 'react'
import "./App.css";
import Navigation from "./components/Navigation";
import ProductSidebar from "./components/ProductSidebar";
import SalesGraph from "./components/SalesGraph";
import SalesTable from "./components/SalesTable";

function App() {
  return (
    <div>
      <Navigation />
      <div className="main">
        <ProductSidebar /> 
        <SalesGraph />
        <SalesTable />
      </div>
    </div>
  );
}

export default App;
