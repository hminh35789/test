

import Badge from "@material-ui/core/Badge";
import {     Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

import styles from '../styles/Minh.module.css'


export default function Header(params) {
    return(
        <div>
            {/* <h1  className={styles.header}> day la header</h1> */}
            <div className={styles.title}>
                <div className={styles.left}>
                    EN
                    <div className={styles.input}>
                        <input className={styles.inputI} type="text" />
                        <Search> </Search>
                    </div>
                </div>
                <div className={styles.center}>
                    <h1 className={styles.logo}>IKIGUY</h1>
                </div>
                <div className={styles.right}>  
                    
                    <h5 className={styles.rightItem}>  Register</h5>
                    <h5 className={styles.rightItem}>Sign In</h5>
                    <Badge className={styles.rightItem} color="secondary" badgeContent={99}>
                        <ShoppingCartOutlined></ShoppingCartOutlined>
                    </Badge>
                </div>
            </div>
            
           
        </div>
    )
};
