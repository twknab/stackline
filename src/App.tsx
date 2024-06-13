// import { useState } from 'react'
import Navigation from "./components/Navigation";
import ProductSidebar from "./components/ProductSidebar";
import SalesGraph from "./components/SalesGraph";
import SalesTable from "./components/SalesTable";

function App() {
  return (
    <div className="h-screen">
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
