import { Suspense, use, useState } from "react";
import AllCard from "../components/AllCard/AllCard";
import Task from "../components/Task/Task";

export default function Main({
  fetchData,
  setprogress,
  progress,
  resolveCount,
  setresolveCount,
}) {
  const toatalCard = use(fetchData);
  const [allCard, setallCard] = useState(toatalCard);
  const [open, setopen] = useState(false);
  return (
    <div className="my-5 flex flex-col lg:flex-row justify-between items-start max-w-[1300px] min-h-screen mx-auto mt-5">
      <div className="w-full lg:w-[70%] ">
        <AllCard
          setopen={setopen}
          allCard={allCard}
          setprogress={setprogress}
          progress={progress}
          fetchData={fetchData}
        />
      </div>
      <div className="w-full lg:w-[25%] rounded-xl shadow-2xl p-5 mx-auto">
        <Task
          open={open}
          setallCard={setallCard}
          allCard={allCard}
          progress={progress}
          setprogress={setprogress}
          resolveCount={resolveCount}
          setresolveCount={setresolveCount}
        />
      </div>
    </div>
  );
}
