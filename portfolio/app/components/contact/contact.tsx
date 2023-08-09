import classes from './contact.module.css'

//icon
import { BiCodeAlt } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const Contact =()=>{

     const contacts = [
          {
            heading: "Email",
            text: "promiseejiro43@gmail.com",
            icon: <BiCodeAlt className={classes.icons} />,
          },
          {
            heading: "Address",
            text: "Remote",
            icon: <MdCall className={classes.icons} />,
          },
          {
            heading: "Phone",
            text: "+2349030257743",
            icon: <MdCall className={classes.icons} />,
          },
        ];

     return(
          <div className={classes.services_section}>
          <h3 className={classes.sub_heading}>Contact</h3>
          {contacts.map((contact) => (
            <div className={classes.card}>
              {contact.icon}
              <h4>{contact.heading}</h4>
              <p>{contact.text}</p>
            </div>
          ))}
        </div>
     )
}

export default Contact