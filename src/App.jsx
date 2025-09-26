import { Suspense, useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const fetchFunction = async () => {
  const res = await fetch("/card.json");
  return res.json();
};
const fetchData = fetchFunction();

function App() {
  const [progress, setprogress] = useState([]);
  const [resolveCount, setresolveCount] = useState(0);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <Banner progress={progress} resolveCount={resolveCount} />
      <Suspense
        fallback={
          <div>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Main
          fetchData={fetchData}
          progress={progress}
          setprogress={setprogress}
          resolveCount={resolveCount}
          setresolveCount={setresolveCount}
        />
      </Suspense>
    </>
  );
}

export default App;
