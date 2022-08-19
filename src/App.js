import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TopNavigationBar} from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
// import dummy from "../../db/mockAttraction.json";
import dummy from "../src/db/mockAttraction.json";
import {useState} from "react";
import SelectBox from "./components/main/selectbox/SelectBox";

function App() {
    const [initialData, setInitialData] = useState(dummy);
    const [data, setData] = useState(dummy);

    return (
        <BrowserRouter>
            <TopNavigationBar data={initialData} setData={setData}/>

            <Routes>
                <Route path="/" element={<Home items={data} setData={setData} dataForCategory={initialData} />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
