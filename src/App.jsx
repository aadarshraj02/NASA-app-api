import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDisplayModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchApiData = async () => {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "GET https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiData();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Main />
      {showModal && <Sidebar handleClose={handleCloseModal} />}
      <Footer handleDisplayModal={handleDisplayModal} />
    </div>
  );
};

export default App;
