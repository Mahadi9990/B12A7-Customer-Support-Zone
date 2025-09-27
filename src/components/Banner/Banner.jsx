export default function Banner({ progress, resolveCount }) {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className={`bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-72 w-full rounded-2xl  text-white`}>
        <div className="w-full h-full text-center flex justify-evenly items-center">
          <div className=" h-full">
            <img className="h-full" src="/123.png" alt="" />
          </div>
          <div className="">
            <h1 className="text-xl text-nowrap">In-Progress</h1>
            <p className="text-6xl font-bold">{progress.length}</p>
          </div>
          <div className=" h-full">
            <img src="/123.png" alt="" className="h-full rotate-y-180" />
          </div>
        </div>
      </div>
      <div className={`bg-gradient-to-r from-[#54CF68] to-[#00827A] h-72 w-full rounded-2xl flex flex-col text-white justify-center items-center`} >
        <div className="w-full h-full text-center flex justify-evenly items-center">
          <div className=" h-full">
            <img className="h-full" src="/123.png" alt="" />
          </div>
          <div className="">
            <h1 className="text-xl text-nowrap">Resolved</h1>
            <p className="text-6xl font-bold">{resolveCount}</p>
          </div>
          <div className=" h-full">
            <img src="/123.png" alt="" className="h-full rotate-y-180" />
          </div>
        </div>
      </div>
    </div>
  );
}
