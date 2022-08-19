import React from "react";
import {handleSearch} from "../../header/topNavigationBar/topNavigationBar";

function SelectBox({data, setData}){

    const handleLocation = (e)=>{
        handleSearch("GUGUN_NM", data, e.target.value, setData );
    }

    return (
        <div>
            <select onChange={handleLocation}>
                <option value={""}>전체</option>
                <option value={"해운대구"}>해운대구</option>
                <option value={"영도구"}>영도구</option>
                <option value={"기장군"}>기장군</option>
                <option value={"동구"}>동구</option>
                <option value={"서구"}>서구</option>
                <option value={"북구"}>북구</option>
                <option value={"남구"}>남구</option>
                <option value={"중구"}>중구</option>
                <option value={"수영구"}>수영구</option>
                <option value={"동래구"}>동래구</option>
                <option value={"사하구"}>사하구</option>
                <option value={"사상구"}>사상구</option>
                <option value={"강서구"}>강서구</option>
                <option value={"부산진구"}>부산진구</option>
                <option value={"금정구"}>금정구</option>
            </select>
        </div>

    );
}

export default SelectBox