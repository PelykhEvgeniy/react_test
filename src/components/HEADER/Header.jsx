import React from "react";
import styles from "./Header.module.scss"
import {menu} from "./menu"
const Header = () =>{
    return (
        <div className={styles.header}>
            <div className={styles.logo}>LOGO</div>
                <div className={styles.menu__wrapper}>
                    <ul className={styles.menu__list}>
                        {menu.map((item, idx) => (
                            <li className={styles.list__item} key={idx}>
                                <a href={item.link} className={styles.list__link}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.btns}>
                        <button className={styles.btns__login}>LOGIN</button>
                        <button className={styles.btns__signUp}>SIGN UP</button>
                    </div>
                </div>
        </div>
    )
};


export default Header;