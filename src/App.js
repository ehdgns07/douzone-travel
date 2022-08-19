import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
// import dummy from "../../db/mockAttraction.json";
import dummy from "../src/db/mockAttraction.json";
import { useState } from "react";

function App() {

  const [data, setData] = useState(dummy);

  return (
    <BrowserRouter>
      <TopNavigationBar data={data} setData={setData}/>
      <Routes>
        <Route path="/" element={<Home items={data}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
