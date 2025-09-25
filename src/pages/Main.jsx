import { Suspense } from "react";
import AllCard from "../components/AllCard/AllCard";
import Task from "../components/Task/Task";

const fetchFunction = async () => {
  const res = await fetch("/card.json");
  return res.json();
};
const fetchData = fetchFunction();
export default function Main({setprogress ,progress,resolveCount,setresolveCount}) {

 return (
    <div className="flex lg:flex-cols justify-between items-start max-w-[1300px] mx-auto mt-5">
      <Suspense
        fallback={
          <div>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
            <span className="loading loading-spinner loading-xl"></span>
           </div>
        }
      >
        <AllCard setprogress={setprogress} progress={progress} fetchData={fetchData} />
      </Suspense>
      <Task progress={progress} setprogress={setprogress} resolveCount={resolveCount} setresolveCount={setresolveCount}/>
    </div>
  );
}
