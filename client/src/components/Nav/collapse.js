import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { navData } from "../lib/navData";

/* export default function Sidenav() {
      return (
<div>
    <button className={styles.menuBtn}>
        <KeyboardDoubleArrowLeftIcon />
    </button>
    {navData.map(item =>{
        return <div key={item.id} className={styles.sideitem}>
 {item.icon}
 <span className={styles.linkText}>{item.text}</span>
 </div>
        })}
 </div>
    )} */



import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Nav from '.';

const [open, setopen] = useState(true)

const toggleOpen = () => {
        setopen(!open)
    }

{navData.map(item => {
        return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                   {item.icon}
                   <span className={styles.linkText}>{item.text}</span>
               </NavLink>
    })}

<div className={open?styles.sidenav:styles.sidenavClosed}>
    <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
    </button>
    {navData.map(item =>{
        return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                  {item.icon}
                   <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
               </NavLink>
     })}
</div>


//export default Sidenav;
export default Nav;