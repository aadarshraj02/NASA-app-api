import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex min-h-screen relative">
      <Main />
      <Sidebar></Sidebar>
      <Footer />
    </div>
  );
};

export default App;
