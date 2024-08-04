import { BsInfoCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full">
      <div>
        <h2>The Brutal Martin Landscape</h2>
        <h1>APOD Project</h1>
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
