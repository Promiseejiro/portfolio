"use client";
import { ThemeContext } from "../context/themecontext";
import { useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Service from "./components/services/services";
import Contacts from "./components/contactme/contactme";
import Projects from "./components/projects/projects";

//icons
import { BiCodeAlt } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
//css
import classes from "./page.module.css";

export default function Home() {
  let { message } = useContext(ThemeContext);
 
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

  const experiences = [
    {
      date: "May 2022 - Present",
      heading: "Lead developer EasyInterview",
      text: "Contact me to discuss that convinced idea, while were bring it to reality with my tech skills",
    },
    {
      date: "May 2022 - Present",
      heading: "Lead developer EasyInterview",
      text: "Contact me to discuss that convinced idea, while were bring it to reality with my tech skills",
    },
    {
      date: "May 2022 - Present",
      heading: "Lead developer EasyInterview",
      text: "Contact me to discuss that convinced idea, while were bring it to reality with my tech skills",
    },
    {
      date: "May 2022 - Present",
      heading: "Lead developer EasyInterview",
      text: "Contact me to discuss that convinced idea, while were bring it to reality with my tech skills",
    },
  ];
  const qualifications = [
    {
      date: "Sept 2019 - current",
      heading: "BSC",
      course: "Mechanical engineering",
      text: "Delta state University abraka",
    },
    {
      date: "Sept 2015 - 2018",
      heading: "Senior secondary leaving certificate",
      text: "Asoro Grammer school. Benin city",
    },
    {
      date: "Sept 2015 - 2017",
      heading: "Senior secondary leaving certificate",
      course: "Science",
      text: "Asoro Grammer school. Benin city",
    },
  ];

  const frameworks = [
    {
      name: "Material UI",
      percent: "70%",
    },
    {
      name: "Bootstrap",
      percent: "90%",
    },
    {
      name: "Tailwind CSS",
      percent: "85%",
    },
  ];

  const tools = [
    "Node/Express",
    "JavaScript/Typescript",
    "React/Nextjs",
    "MYSQL/Mongo DB",
  ];

  const onChangeHandler = (e: any) => {};
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className={classes.main_container}>
        <div>
          <Navbar />
        </div>
        <Contacts />
       <Hero></Hero>
      <Service></Service>

        <div className={classes.expirence_section}>
          <h3 className={classes.sub_heading}>Experience</h3>
          {experiences.map((experience) => (
            <div className={classes.card}>
              <span>{experience.date}</span>
              <h4>{experience.heading}</h4>
              <p>{experience.text}</p>
            </div>
          ))}
        </div>
        <div className={classes.expirence_section}>
          <h3 className={classes.sub_heading}>Education</h3>
          {qualifications.map((experience) => (
            <div className={classes.card}>
              <span>{experience.date}</span>
              <h4>{experience.heading}</h4>
              <h6>{experience.text}</h6>
              <p>{experience.course}</p>
            </div>
          ))}
        </div>

        <div className={classes.frameworks}>
          {frameworks.map((framework) => (
            <div className={classes.card}>
              <div className={classes.info_details}>
                <h5>{framework.name}</h5> <p>{framework.percent}</p>
              </div>
              <div className={classes.progressbar}></div>
            </div>
          ))}
        </div>

        <div className={classes.tools_section}>
          <h3 className={classes.sub_heading}>Stack/Tech</h3>
          {tools.map((tool) => (
            <div>
              <GoDotFill className={classes.icon} />
              <h4>{tool}</h4>
            </div>
          ))}
        </div>
        <div className={classes.languages}>
          <h3 className={classes.sub_heading}>programming Languages</h3>
          <div className={classes.card}>
            <div className={classes.item1}>
              <span>2 Yrs</span>
              <h4>JavaScript</h4>
            </div>
            <div className={classes.item2}>
              <span>1 Yrs</span>
              <h4>PHP</h4>
            </div>
            <div className={classes.item3}>
              <span>2 Yrs</span>
              <h4>HTML/CSS</h4>
            </div>
          </div>
        </div>
        <div className={classes.projects}>
          <h3 className={classes.sub_heading}>projects</h3>
          <Projects></Projects>
        </div>
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

        <div className={classes.form}>
          <h3 className={classes.sub_heading}>Contact</h3>
          <form>
            <div className={classes.form_controller}>
              <input placeholder="Name" onChange={onChangeHandler} />
            </div>
            <div className={classes.form_controller}>
              <input placeholder="Email" onChange={onChangeHandler} />
            </div>
            <div className={classes.form_controller}>
              <textarea
                placeholder="message"
                onChange={onChangeHandler}
              ></textarea>
            </div>
            <div className={classes.form_controller}>
              <input
                className={classes.submit}
                type="submit"
                value="Send message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
