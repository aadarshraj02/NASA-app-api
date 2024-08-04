import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Main />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
