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
    <div className={classes.wrapper}> 
    <h3>{message}</h3>
 {!openNav &&(  <FaBars onClick={navHandler} className={classes.nav_icon}/>)}
  {openNav && (  <FaTimes onClick={navHandler} className={classes.nav_icon}/>)}
    {
  openNav &&(  <div className={classes.mobile_nav}>
   <ul >
 <li> <Link href="">Why ReachCRM</Link> </li>
 <li> <Link href="">Pricing</Link> </li>
 <li> <Link href="">Resources</Link> </li>
 <li> <Link href="">Explore</Link> </li></ul>
  
  
  </div>
  )
    }
    </div>
    )
}

export default Navbar