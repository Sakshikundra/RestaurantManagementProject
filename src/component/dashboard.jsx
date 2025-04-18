import Order from "./Order";
import Table from "./table";

export default function Dashboard() {
  return (
    <div className="bg-slate-300   h-screen px-[4rem]">
      <h1 className="font-semibold py-[2rem]">Dashboard</h1>
      <div className="bg-white  w-[100%] m-auto  rounded-xl">
        <h3 className=" px-[2rem] py-[1rem] font-semibold">Orders in Queue</h3>

        <div className="flex justify-evenly pb-6 shadow-md">
          <Order name="Ajay " amount="10000" table="1" />{" "}
          <Order name="Ravi " amount="1499" table="1" />
          <Order name="Krishna " amount="180" table="1" />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
}
