
export default function Banner({progress,resolveCount}) {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between items-center gap-6'>
        <div className={`bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-72 w-full rounded-2xl flex flex-col text-white justify-center items-center`}
        >
          <h1 className="text-xl">In-Progress</h1>
          <p className="text-6xl font-bold">{progress.length}</p>
        </div>
        <div className={`bg-gradient-to-r from-[#54CF68] to-[#00827A] h-72 w-full rounded-2xl flex flex-col text-white justify-center items-center`}>
          <h1 className="text-xl ">Resolved</h1>
          <p className="text-6xl font-bold">{resolveCount}</p>
        </div>
    </div>
   
  )
}
