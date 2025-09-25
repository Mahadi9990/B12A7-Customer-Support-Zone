import { useState } from "react";
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Main from "./pages/Main"


function App() {
  const [progress, setprogress] = useState([]);
  const [resolveCount, setresolveCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Banner progress={progress} resolveCount={resolveCount}/>
      <Main progress={progress} setprogress={setprogress} resolveCount={resolveCount} setresolveCount={setresolveCount} />
    </>
  )
}

export default App
