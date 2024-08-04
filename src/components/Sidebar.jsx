import { IoClose } from "react-icons/io5";

const Sidebar = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex flex-col text-zinc-400">
      <div className="flex flex-col gap-4 p-4 h-full w-[40%] max-w-[800px] ml-auto bg-zinc-800 overflow-y-scroll">
        <h2 className="text-3xl text-center text-zinc-200 font-bold">
          The Brutal Martin Landscape
        </h2>
        <div className="flex-1">
          <p className="text-xl text-zinc-300">Description</p>
          <p className="text-sm leading-none">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aut
            quia vitae mollitia culpa facilis, sapiente atque. Debitis, soluta
            et.
          </p>
        </div>
        <button
          className="bg-red-500 text-white outline-none cursor-pointer z-50 flex items-center justify-center px-2 py-0.5 rounded"
          onClick={handleClose}
        >
          Close
          <IoClose className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
