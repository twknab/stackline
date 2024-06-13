import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setProducts } from "./features/products/productSlice";
import Navigation from "./components/Navigation";
import ProductSidebar from "./components/ProductSidebar";
import SalesGraph from "./components/SalesGraph";
import SalesTable from "./components/SalesTable";
import productData from "./assets/data/data-2021.json";

function App() {
  const productsData = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(productData));
  }, [dispatch]);

  const product = productsData[0];

  return (
    <div className="h-screen bg-[#F6F8FA]">
      <Navigation />
      <div className="flex flex-col sm:flex-row h-content mt-[79px] m-6 sm:ml-6 h-3/4">
        <ProductSidebar product={product} />
        <div className="w-full mt-[65px] sm:mt-0 ml-0 sm:ml-6">
          <SalesGraph />
          <SalesTable className="mt-[65px]" />
        </div>
      </div>
    </div>
  );
}

export default App;
