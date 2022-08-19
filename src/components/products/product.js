import {Link} from "react-router-dom";
import styles from "./product.module.css";
import {useState} from 'react';


export const Product = (props) => {

    const data = props.mainprops;
    console.log(data);
    return (
        <div>
            {
                data.map((item) => {
                    return (<div className={styles.product}>
                        <Link to="#">
                            <div className={styles.product_image}>
                                <img src={item.MAIN_IMG_THUMB} alt="product"/>
                                {/*<img src="https://www.visitbusan.net/uploadImgs/files/cntnts/20191222164810529_ttiel" alt="product" />*/}
                            </div>
                        </Link>
                        <div className={styles.store}>
                            <span>{item.ADDR1}</span>
                            {/* <span>{items.GUGUN_NM}</span> */}
                        </div>

                        <div className={styles.product_name}>
                            <span>{item.MAIN_TITLE}</span>
                        </div>

                        <div className={styles.product_price}>
                            <span className={styles.price}>{item.SUBTITLE}</span>
                            {/* <span className={styles.unit}></span> */}
                        </div>
                    </div>)
                })
            }
        </div>
    );

};
