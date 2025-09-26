import { Suspense, use, useState } from "react";
import AllCard from "../components/AllCard/AllCard";
import Task from "../components/Task/Task";


export default function Main({fetchData,setprogress ,progress,resolveCount,setresolveCount}) {
    const toatalCard = use(fetchData);
    const [allCard, setallCard] = useState(toatalCard);
 return (
    <div className="flex lg:flex-cols justify-between items-start max-w-[1300px] mx-auto mt-5">
      
        <AllCard allCard={allCard} setprogress={setprogress} progress={progress} fetchData={fetchData} />
      <Task setallCard={setallCard} allCard={allCard} progress={progress} setprogress={setprogress} resolveCount={resolveCount} setresolveCount={setresolveCount}/>
    </div>
  );
}
