import React from "react";
import { toast } from "react-toastify";

export default function Task({ progress ,setprogress ,resolveCount,setresolveCount }) {
    const handleResolve =(item)=>{
        const resolve = progress.filter((allitme)=> allitme.id !== item.id)
        setprogress(resolve)
        setresolveCount(resolveCount + 1)
        toast.success("Resolved Task")
    }
  return (
    <div className="w-full lg:w-[28%]">
      <h1 className="font-bold text-3xl text-start py-5">Task Status</h1>
      <p className="text-md">Select a ticket to add to Task Status</p>
      <div className="flex flex-col justify-start items-start">
        {progress && progress.length > 0 ? (
          progress.map((item) => (
            <div key={item.id} className="my-3 w-full">
              <h1 className="py-3">{item.title}</h1>
              <button onClick={()=>handleResolve(item)} className="btn btn-success w-full">Complete</button>
            </div>
          ))
        ) : (
          <div className="mt-5">
            <h1 className="text-start font-bold text-3xl">Resolved Task</h1>
            <p className="text-md">No resolved tasks yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
