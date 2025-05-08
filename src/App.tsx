import { useState } from "react";
import "./App.css";
import { SideBar } from "./components";
import InfoForm from "./components/InfoForm";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0)

  return (
    <div className="app">
      <SideBar currentPage={currentPage}/>
      <InfoForm setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
