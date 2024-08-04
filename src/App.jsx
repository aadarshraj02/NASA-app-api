import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModal, setShowModal] = useState(false);

  const handleDisplayModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex min-h-screen">
      <Main />
      {showModal && <Sidebar handleClose={handleCloseModal} />}
      <Footer handleDisplayModal={handleDisplayModal} />
    </div>
  );
};

export default App;
