export default function Order(props ) {
  return (
    <div className=" py-[1rem] rounded-xl grid-cols-2 grid w-[20rem] border-solid border border-black mx-4 ">
      <div className="font-bold mx-3">Table :{props.table} </div>
      <div className="font-bold ">Amount:{props.amount}</div>
      <div className=" mx-3">Waiter: {props.name}</div>
      <div>
        <button className="bg-lime-400 rounded-md px-4 py-1 text-white font-bold text-center"> View Details </button>
      </div>
    </div>
  );
}
