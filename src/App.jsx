import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDisplayModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex min-h-screen">
      <Main />
      {showModal && <Sidebar></Sidebar>}
      <Footer showModal={showModal} />
    </div>
  );
};

export default App;
