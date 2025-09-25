import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
export default function Card({cardItem}) {
  return (
    <div className="p-5 rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{cardItem.title}</h1>
            <button className="btn rounded-3xl bg-green-200 text-green-700 "> <FontAwesomeIcon icon={faCircleDot} size="2x" color="green"  />{cardItem.status}</button>
        </div>
        <div className="py-3">
            <p className="text-xl">{cardItem.description}</p>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
                <span className="pr-5">#00{cardItem.id}</span><span>{cardItem.priority}</span>
            </div>
            <div className="flex justify-center items-center gap-4">
                <h1>{cardItem.customer}</h1>
                <p>{cardItem.createdAt}</p>
            </div>
        </div>
    </div>
  )
}
