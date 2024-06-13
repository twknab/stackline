import { Product } from "../features/products/productSlice";

interface ProductSidebarProps {
  product: Product;
}

function ProductSidebar({product}: ProductSidebarProps) {
  if (!product) {
    return <div>No product available.</div>
  }

  console.log(product)
  return (
    <div className="bg-white w-full sm:w-[522px] pt-6 shadow-lg">
      <img src={product.image} width="163px" height="206px" alt="Shark Ninja" className="mx-auto" />
      <h1 className="text-[1.39rem] text-center font-normal mt-3">{product.title}</h1>
      <p className="text-md text-center mt-1 mb-5 text-[#A7B7C9] pl-14 pr-14">
        {product.subtitle}
      </p>
      <div className="border-t border-b mb-6 pt-4 pb-4 pl-5 pr-5">
        {product.tags.map(tag =>
          <div className="chip">{tag}</div>
        )}
      </div>
    </div>
  );
}

export default ProductSidebar;
