import classes from "./services.module.css";
import { BiCodeAlt } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import SubHeader from "../subHeading/subheading";
const Service = () => {
  const services = [
    {
      heading: "Web development",
      text: "when a user logs out before time the person setting the exam can help then",
      icon: <BiCodeAlt className={classes.icons} />,
    },
    {
      heading: "Consultant",
      text: "Contact me to discuss that convinced idea, while were bring it to reality with my tech skills",
      icon: <MdCall className={classes.icons} />,
    },
  ];

  return (
    <div className={classes.services_section}>
    <SubHeader label='Services'></SubHeader>
      <div className={classes.service_container}>
      <div className={classes.box}>
          {services.map((service) => (
          <div className={classes.card}>
            {service.icon}
            <h4>{service.heading}</h4>
            <p>{service.text}</p>
          </div>
        ))}
          </div>
     
      </div>
    </div>
  );
};

export default Service;
