import React, { use } from "react";
import Card from "../Card/Card";

export default function AllCard({ fetchData,setprogress,progress }) {
  const allCard = use(fetchData);
 
  return (

      <div className="w-full lg:w-[70%]">
        <h1 className="font-bold text-3xl text-start py-5">Customer Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-72 ">
          {allCard && allCard.length
            ? allCard.map((item) => <Card progress={progress} setprogress={setprogress}  key={item.id} cardItem={item} />)
            : null}
        </div>
      </div>
  );
}
