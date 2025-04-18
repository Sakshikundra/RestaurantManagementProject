import Tableno from "./tableno.jsx";
export default function Table() {
    const OArray=[
        {tableno:"1", isAvailable:true},
        {tableno:"2" ,isAvailable:false},
        {tableno:"3", isAvailable:true},
        {tableno:"4" , isAvailable:true},
        {tableno:"5" ,isAvailable:false},
        {tableno:"6" ,isAvailable:true},
        {tableno:"7" ,isAvailable:true},
        {tableno:"8" ,isAvailable:false},
        {tableno:"9" ,isAvailable:true},
        {tableno:"10" ,isAvailable:true},
        {tableno:"11" ,isAvailable: false},
        {tableno:"12" ,isAvailable:false},

    ]
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h2 className=" px-[2rem] py-[1rem] font-semibold">Table Booking Status</h2>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <div className="bg-lime-400   h-3.5 w-3.5"></div> <h2 className="px-[1rem] py-[1rem] font-semibold">Available</h2>{" "}
          </div>
          <div className="flex items-center">
            <div className="bg-red-600   h-3.5 w-3.5 "></div> <h2 className="px-[1rem] py-[1rem] font-semibold">Not Available</h2>{" "}
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex px-[2rem] py-[1rem] gap-6   text-white font-bold flex-wrap">
          {
            OArray.map((item,index)=>{
                return(
                    
                    <Tableno no={item.tableno} isAvailable={item.isAvailable}/>
                )
            } )
          }
      </div>
    </>
  );
}
