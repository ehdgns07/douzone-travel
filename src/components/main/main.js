import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import SelectBox from "./selectbox/SelectBox";

export const Main = (props) => {
  const mainp = props.homeprops;

  return (
    <>
      <EventBanner />
        <SelectBox data={props.dataForCategory} setData={props.setData}></SelectBox>
      <div className={styles.filter}>
        <p>별점순</p>
        <p>리뷰순</p>
        <p>거리순</p>
      </div>
      <main className={styles.flex_wrap}>
        <Product mainprops={mainp}/>
      </main>
    </>
  );
};
