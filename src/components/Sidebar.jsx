import { IoClose } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="flex flex-col gap-4 p-4 h-full w-[90%] max-w-[800px] ml-auto bg-zinc-800 overflow-y-scroll">
        <h2>The Brutal Martin Landscape</h2>
        <div className="flex-1">
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aut
            quia vitae mollitia culpa facilis, sapiente atque. Debitis, soluta
            et.
          </p>
        </div>
        <button className="bg-transparent text-white outline-none mr-auto">
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
