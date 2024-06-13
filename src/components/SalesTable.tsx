import { useState } from "react";
import { Sale } from "../features/products/productSlice";
import { format } from "date-fns";

interface SalesTableProps {
  sales: Sale[];
}

function SalesTable({ sales }: SalesTableProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Sale;
    direction: "ascending" | "descending";
  } | null>(null);

  if (!sales) {
    return <div>Sales data is not provided.</div>;
  }

  const sortedSales = [...sales].sort((a, b) => {
    if (sortConfig !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key: keyof Sale) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key: keyof Sale) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    
    return sortConfig.direction === "ascending" ? "˄" : "˅";
  };

  return (
    <div className={`bg-white shadow-lg overflow-x-auto`}>
      <table className="min-w-full bg-white">
        <thead className="text-gray-600">
          <tr>
            <th
              className="px-8 py-8 border-b cursor-pointer font-normal text-left"
              onClick={() => requestSort("weekEnding")}
            >
              WEEK ENDING {getSortIndicator("weekEnding")}
            </th>
            <th
              className="py-8 pr-6 border-b cursor-pointer font-normal text-center"
              onClick={() => requestSort("retailSales")}
            >
              RETAIL SALES {getSortIndicator("retailSales")}
            </th>
            <th
              className="py-8 border-b cursor-pointer font-normal text-center"
              onClick={() => requestSort("wholesaleSales")}
            >
              WHOLESALE SALES {getSortIndicator("wholesaleSales")}
            </th>
            <th
              className="py-8 pr-8 border-b cursor-pointer font-normal text-right"
              onClick={() => requestSort("unitsSold")}
            >
              UNITS SOLD {getSortIndicator("unitsSold")}
            </th>
            <th
              className="py-8 pr-8 border-b cursor-pointer font-normal text-right"
              onClick={() => requestSort("retailerMargin")}
            >
              RETAILER MARGIN {getSortIndicator("retailerMargin")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedSales.map((sale, index) => (
            <tr className="text-[#A7B7C9]" key={index}>
              <td className="py-6 px-8 border-b">
                {format(new Date(sale.weekEnding), "MM-dd-yyyy")}
              </td>
              <td className="py-6 pr-28 border-b text-right">
                ${sale.retailSales.toLocaleString()}
              </td>
              <td className="py-6 pr-14 border-b text-right">
                ${sale.wholesaleSales.toLocaleString()}
              </td>
              <td className="py-6 px-8 border-b text-right">
                {sale.unitsSold}
              </td>
              <td className="py-6 px-8 border-b text-right">
                ${sale.retailerMargin.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;