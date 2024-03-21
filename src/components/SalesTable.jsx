import React from "react";

const SalesTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300">WEEK ENDING</th>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300">RETAIL SALES</th>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300">WHOLESALE SALES</th>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300">UNITS SOLD</th>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300">RETAILER MARGIN</th>
          </tr>
        </thead>
        <tbody>
          {data.sales.map(sale => (
            <tr key={sale.weekEnding}>
              <td className="px-4 py-2 border border-gray-300">{sale.weekEnding}</td>
              <td className="px-4 py-2 border border-gray-300">${sale.retailSales}</td>
              <td className="px-4 py-2 border border-gray-300">${sale.wholesaleSales}</td>
              <td className="px-4 py-2 border border-gray-300">{sale.unitsSold}</td>
              <td className="px-4 py-2 border border-gray-300">${sale.retailerMargin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
