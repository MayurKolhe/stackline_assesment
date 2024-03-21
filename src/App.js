import React from "react";
import { useSelector } from "react-redux";

import NavBar from '../src/components/NavBar'
import SalesTable from '../src/components/SalesTable'
import Card from '../src/components/Card'

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const App = () => {
  const data = useSelector((state) => state.reducer.data[0]);

  return (
    <div className="flex">
      <NavBar />
      <aside className="m-4">
        <Card>
          <div className="text-center max-w-xs p-4">
            <img src={data.image} alt='Product' className="h-40 mx-auto" />
            <div className="font-bold text-xl">{data.title}</div>
            <div>{data.subtitle}</div>
            <hr className="my-4" />
            <div>
              {data.tags.map(tag => (
                <button className="bg-white border border-gray-300 rounded px-2 py-1 m-1" key={tag}>{tag}</button>
              ))}
            </div>
            <hr className="my-4" />
          </div>
        </Card>
      </aside>
      <div className="flex flex-col">
        <div className="m-4">
          <Card>
            <div className="min-w-full">
              <div className="text-2xl font-bold mb-4">Retail Sales</div>
              <div className="h-40 text-center">GRAPH</div>
              <hr className="my-4" />
              <div className="flex">
                {monthNames.map((month, index) => (
                  <div className="flex-grow" key={index}>{month}</div>
                ))}
              </div>
            </div>
          </Card>
        </div>
        <div className="m-4">
          <Card>
            <div className="min-w-full">
              <SalesTable data={data} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
