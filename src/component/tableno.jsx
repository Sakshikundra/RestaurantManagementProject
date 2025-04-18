// Tableno.jsx
export default function Tableno(props) {
    return (
      <button
        className={
          props.isAvailable
            ? "bg-lime-400 rounded-md   items-center justify-center w-45 h-10 rounded-md flex-col flex px-2 py-1 text-white font-bold text-center"
            : "bg-red-600 rounded-md   items-center justify-center w-45 h-10 rounded-md flex flex-col px-2 py-1 text-white font-bold text-center"
        }
      >
        <h3 className="text-lg mt-1">Table no: {props.no}</h3>
      </button>
    );
  }
  