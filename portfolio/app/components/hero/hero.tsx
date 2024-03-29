import Link from "next/link";

import classes from "./hero.module.css";

import { mydetails } from "@/app/utils/data";

const Hero = () => {
  return (
    <div>
      <div className={classes.hero_section}>
        <div className={classes.hero_overlay}>
          <h1></h1>
          <h4>
            I love <span>programming</span>
          </h4>
          <p>
            Hello! I'm <span>Emosivbe promise</span>, a fullstack web developer
          </p>
        </div>
      </div>
      <div className={classes.details_container}>

      <div className={classes.details}>
          
          <div>
            <img
              className={classes.detailes_image}
              src="https://res.cloudinary.com/dxqg5hify/image/upload/v1691327439/image-1__1_-removebg-preview_1691310334102-removebg-preview_wxcx6d.png"
            />
          </div>
  
          <div className={classes.content}>
            <p className={classes.discription}>
            I'm Emosivbe promise. A tech savant with
              mastery of contemporary tools and technologies, fashioning software solutions that prioritize seamless user experiences and improve lives.
            </p>
            <div className={classes.ul_container}>
              <ul className={classes.first_ul}>
                {mydetails.map((detail) => (
                  <li>
                    {detail.label}:<span>{detail.value}</span>
                  </li>
                ))}
              </ul>
              <ul className={classes.second_ul}>
                {mydetails.map((detail) => (
                  <li>
                    {detail.label}:<span>{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className={classes.btn_container}>
              <Link href="">Download CV</Link>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};
export default Hero;
