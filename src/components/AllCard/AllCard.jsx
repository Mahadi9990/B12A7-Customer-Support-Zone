import Card from "../Card/Card";

export default function AllCard({ allCard,setprogress,progress }) {

  return (
      <>
        <h1 className="font-bold text-3xl text-start py-5">Customer Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          {allCard && allCard.length
            ? allCard.map((item) => <Card progress={progress} setprogress={setprogress}  key={item.id} cardItem={item} />)
            : null}
        </div>
      </>
  );
}
