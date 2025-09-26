import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export default function Card({ cardItem,setprogress,progress }) {
  const handleClick = (item) => {
    setprogress([...progress,item])
      toast.success("In-Progress");
  };
  return (
    <div
      onClick={() => handleClick(cardItem)}
      className="p-5 rounded-2xl shadow-2xl"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{cardItem.title}</h1>
        <button className={`btn rounded-3xl ${cardItem.status === 'Open'?'bg-green-200 text-green-700':cardItem.status === 'Resolved'?'bg-yellow-200 text-yellow-500':cardItem.status === 'In Progress'?
            'bg-blue-200 text-blue-500':"bg-red-300 text-red-700"}`}>
          <FontAwesomeIcon icon={faCircleDot} size="2x" color="green" />
          {cardItem.status}
        </button>
      </div>
      <div className="py-3">
        <p className="text-xl">{cardItem.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <span className="pr-5">#00{cardItem.id}</span>
          <span>{cardItem.priority}</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <h1>{cardItem.customer}</h1>
          <p>{cardItem.createdAt}</p>
        </div>
      </div>
    </div>
  );
}
