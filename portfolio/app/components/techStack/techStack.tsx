import classes from "./techstack.module.css";

//icons
import { GoDotFill } from "react-icons/go";

//components 
import SubHeader from "../subHeading/subheading";

const TechStack = () => {
  const tools = [
    "Node/Express",
    "JavaScript/Typescript",
    "React/Nextjs",
    "MYSQL/Mongo DB",
  ];
  return (
    <div className={classes.tools_section}>
      <SubHeader label={`Experience`}></SubHeader>
      <div className={classes.section_section_card_container}> 
        <div>
        <GoDotFill className={classes.first_icon}  />
          <h4>Node/Express</h4>
        </div>
        <div>
          <GoDotFill className={classes.icon} />
          <h4>JavaScript/Typescript</h4>
        </div>
        <div>
          <GoDotFill className={classes.icon} />
          <h4>React/Nextjs</h4>
        </div>
        <div>
          <GoDotFill className={classes.icon} />
          <h4>MYSQL/Mongo DB</h4>
        </div>
     </div>
    
    </div>
  );
};

export default TechStack;
