import PayoutCard from "./payoutcard";
import Image from "./Profile.jpg";

export default function Payout() {
  const payoutsData = [
    {
      name: "Ramesh Roy",
      id: "W29381",
      mobile: "+91-8696458152",
      role: "Waiter",
      accountHolder: "Ramesh Roy",
      accountNumber: "XXXXXX4879",
      ifsc: "CBIN0282695",
      branch: "Delhi",
      amount: "₹10000.00",
      status: "PAID",
      date: "07/05/2024",
      image: Image,
    },
    {
      name: "Anita Singh",
      id: "W10022",
      mobile: "+91-9876543210",
      role: "Chef",
      accountHolder: "Anita Singh",
      accountNumber: "XXXXXX1234",
      ifsc: "HDFC0009876",
      branch: "Delhi",
      amount: "₹9500.00",
      status: "UNPAID",
      date: "04/05/2024",
      image: Image,
    },
    {
      name: "Rahul Mehra",
      id: "W30981",
      mobile: "+91-8877665544",
      role: "Waiter",
      accountHolder: "Rahul Mehra",
      accountNumber: "XXXXXX5588",
      ifsc: "SBIN0001234",
      branch: "Mumbai",
      amount: "₹25000.00",
      status: "PAID",
      date: "06/05/2024",
      image: Image,
    },
    {
      name: "Sneha Sharma",
      id: "W20981",
      mobile: "+91-7777888899",
      role: "Waiter",
      accountHolder: "Sneha Sharma",
      accountNumber: "XXXXXX9988",
      ifsc: "ICIC0005678",
      branch: "Pune",
      amount: "₹8000.00",
      status: "PAID",
      date: "05/05/2024",
      image: Image,
    },
    {
      name: "Amit Patel",
      id: "W55551",
      mobile: "+91-8001234567",
      role: "Cleaner",
      accountHolder: "Amit Patel",
      accountNumber: "XXXXXX8899",
      ifsc: "AXIS0007654",
      branch: "Ahmedabad",
      amount: "₹6000.00",
      status: "UNPAID",
      date: "04/05/2024",
      image: Image,
    },
    {
      name: "Priya Verma",
      id: "W78901",
      mobile: "+91-9090909090",
      role: "Waiter",
      accountHolder: "Priya Verma",
      accountNumber: "XXXXXX1122",
      ifsc: "KKBK0003210",
      branch: "Lucknow",
      amount: "₹12000.00",
      status: "PAID",
      date: "03/05/2024",
      image: Image,
    },
    {
      name: "Suresh Kumar",
      id: "W88001",
      mobile: "+91-7000000001",
      role: "Waiter",
      accountHolder: "Suresh Kumar",
      accountNumber: "XXXXXX3344",
      ifsc: "PNB0000011",
      branch: "Chandigarh",
      amount: "₹7000.00",
      status: "UNPAID",
      date: "04/05/2024",
      image: Image,
    },
    {
      name: "Meena Joshi",
      id: "W90871",
      mobile: "+91-9303030303",
      role: "Waiter",
      accountHolder: "Meena Joshi",
      accountNumber: "XXXXXX5566",
      ifsc: "BOB0002345",
      branch: "Jaipur",
      amount: "₹11000.00",
      status: "PAID",
      date: "04/05/2024",
      image: Image,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-8 py-6">
      <h1 className="font-semibold text-3xl mb-6 text-gray-800">Payout Details</h1>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <div className="flex gap-4 mb-6">
          <button className="text-gray-700 px-6 py-3 rounded-lg hover:bg-[#FA9F1B] hover:text-white transition duration-300 ease-in-out">
            All
          </button>
          <button className="text-gray-700 px-6 py-3 rounded-lg hover:bg-[#FA9F1B] hover:text-white transition duration-300 ease-in-out">
            Paid
          </button>
          <button className="text-gray-700 px-6 py-3 rounded-lg hover:bg-[#FA9F1B] hover:text-white transition duration-300 ease-in-out">
            Unpaid
          </button>
        </div>

        {payoutsData.map((user, index) => (
          <PayoutCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
