import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";
import React , {useState} from "react";

export function handleSearch (attr, data, input, setData){

    const resultOfSearch = [];

    // console.log(input);
    console.log("data : ", data);
    data.forEach((item) => {
            // console.log(item.MAIN_TITLE);
            const attribute = item[attr];
            // console.log("data : ", item);
            if (attribute.includes(input)) {
                resultOfSearch.push(item);
            }
        }
    )

    setData(resultOfSearch);
}
export const TopNavigationBar = ({data, setData}) => {

  const [input, setInput] = useState('');

  const onChange = (e) =>{
    setInput(e.target.value);
  }

  const onKeyPress = (e)=>{
      if(e.key === 'Enter'){
          handleSearch("MAIN_TITLE",data, input, setData);
      }
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="/images/logo.png" alt="logo" />
          </h1>
        </Link>
        <div className={styles.input_wrap}>
          <input type="text" placeholder="가고싶은 관광지를 검색해보세요!" onChange={onChange} onKeyDown={onKeyPress}/>
          <img src="/images/icon-search.svg" onClick={()=>handleSearch("MAIN_TITLE",data, input, setData)} alt="search" />
        </div>
      </div>

      <div className={styles.menu}>
        <Link to="">
          <div className={styles.mypage}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
