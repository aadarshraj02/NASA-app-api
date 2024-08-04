import { BsInfoCircleFill } from "react-icons/bs";

const Footer = (props) => {
  const { handleDisplayModal, data } = props;

  return (
    <footer className="fixed bottom-0 left-0 w-full flex justify-between items-center gap-4 text-zinc-400 p-4">
      <div>
        <h2 className="text-4xl ">{data?.title}</h2>
        <h1 className="text-2xl">APOD Project</h1>
      </div>
      <div>
        <button className="text-xl" onClick={handleDisplayModal}>
          <BsInfoCircleFill />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
