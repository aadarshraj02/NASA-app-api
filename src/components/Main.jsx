const Main = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col">
      <img
        src={data.hdurl}
        alt=""
        className="w-full h-full flex-1 object-cover"
      />
    </div>
  );
};

export default Main;
