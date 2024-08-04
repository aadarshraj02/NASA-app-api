import { BsInfoCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex justify-between items-center gap-4 text-zinc-400">
      <div>
        <h2 className="text-xl ">The Brutal Martin Landscape</h2>
        <h1 className="text-3xl">APOD Project</h1>
      </div>
      <div>
        <button>
          <BsInfoCircleFill />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
