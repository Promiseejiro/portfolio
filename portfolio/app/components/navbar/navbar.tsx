import {useState,useContext} from "react"
import {ThemeContext } from "../../../context/themecontext"
import Link from "next/link"
import {FaTimes,FaBars} from "react-icons/fa"
import classes from "./navbar.module.css"
const Navbar =()=>{
  //state
  const [openNav,setOpenNav] =useState(false);
  
  //functions
  const navHandler=()=>{
    setOpenNav(!openNav)
  }
  
let { message } = useContext(ThemeContext)
 
  return (
    <div className={classes.nav_wrapper}> 
    <h2 suppressHydrationWarning >Portfolio</h2>
<div className={classes.desktopnav}> <ul >
 <li> <Link href="">Home</Link> </li>
 <li> <Link href="">Resume</Link> </li>
 <li> <Link href="">Project</Link> </li>
 <li> <Link href="">Contact</Link> </li></ul></div>

 {!openNav &&(  <FaBars onClick={navHandler} className={classes.nav_icon}/>)}
  {openNav && (  <FaTimes onClick={navHandler} className={classes.nav_icon}/>)}
    {
  openNav &&(  <div className={classes.mobile_nav}>
   <ul >
 <li> <Link href="">Home</Link> </li>
 <li> <Link href="">Resume</Link> </li>
 <li> <Link href="">Project</Link> </li>
 <li> <Link href="">Contact</Link> </li></ul>
  </div>
  )
    }
    </div>
    )
}

export default Navbar