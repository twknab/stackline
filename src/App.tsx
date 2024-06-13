// import { useState } from 'react'
import Navigation from "./components/Navigation";
import ProductSidebar from "./components/ProductSidebar";
import SalesGraph from "./components/SalesGraph";
import SalesTable from "./components/SalesTable";

function App() {
  return (
    <div className="h-screen bg-[#F6F8FA]">
      <Navigation />
      <div className="flex flex-col sm:flex-row h-content mt-[79px] m-6 sm:ml-6 h-content">
        <ProductSidebar />
        <div className="w-full mt-[65px] sm:mt-0 ml-0 sm:ml-6">
          <SalesGraph />
          <SalesTable className="mt-[65px]"/>
        </div>
      </div>
    </div>
  );
}

export default App;
