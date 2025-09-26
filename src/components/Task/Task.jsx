import { useState } from "react";
import { toast } from "react-toastify";

export default function Task({
  progress,
  setprogress,
  resolveCount,
  setresolveCount,
  allCard,
  setallCard
}) {
  const [resloveArray, setresloveArray] = useState([]);
  const handleResolve = (item) => {
    const resolve = progress.filter((allitme) => allitme.id !== item.id);
    setprogress(resolve);
    const total = allCard.filter((allitme) => allitme.id !== item.id);
    setallCard(total);
    setresolveCount(resolveCount + 1);
    toast.success("Resolved Task");
    setresloveArray([...resloveArray,item])
  };
  const handleResolveArray = (item) => {
    const resolve = resloveArray.filter((allitme) => allitme.id !== item.id);
    setresloveArray(resolve);
    setresolveCount(resolveCount - 1);
    toast.error("Resolved Task Deleted");
  };

  return (
    <>
      <div className="">
        <h1 className="font-bold text-3xl text-start py-5">Task Status</h1>
        <div className="flex flex-col justify-start items-start">
          {progress && progress.length > 0 ? (
            progress.map((item) => (
              <div key={item.title} className="my-3 w-full">
                <h1 className="py-3">{item.title}</h1>
                <button
                  onClick={() => handleResolve(item)}
                  className="btn btn-success w-full"
                >
                  Complete
                </button>
              </div>
            ))
          ) : (
            <div className="w-full mx-auto">
              <h1 className="text-xl text-center">No task is progress</h1>
              <p className="text-md text-center">
                Select a ticket to add to Task Status
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-3xl text-start py-5">Resolved Status</h1>
        <div className="flex flex-col justify-start items-start">
          {resloveArray && resloveArray.length > 0 ? (
            resloveArray.map((item) => (
              <div key={item.id} className="my-3 w-full">
                <h1 className="py-3">{item.title}</h1>
                <div className="flex flex-row justify-between items-center">
                  <h1>Completed</h1>
                  <button
                  onClick={() => handleResolveArray(item)}
                  className="btn btn-success"
                >
                  Click to Delete
                </button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full mx-auto">
              <p className="text-center text-xl">No resolved tasks yet.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
