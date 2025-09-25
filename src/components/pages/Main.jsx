import AllCard from '../AllCard/AllCard'

const fetchFunction = async()=>{
    const res = await fetch("/card.json")
    return res.json()
}
const fetchData = fetchFunction()
export default function Main() {
  return (
    <div className='flex lg:flex-col justify-between items-center max-w-[1300px] mx-auto mt-5'>
        <AllCard  fetchData={fetchData}/>
    </div>
  )
}
