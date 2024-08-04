import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen w-[100vw] bg-zinc-800">
        <AiOutlineLoading3Quarters className="text-6xl text-zinc-500 rotate" />
      </div>
    </div>
  );
};

export default Loading;
