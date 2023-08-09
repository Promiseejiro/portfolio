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
import Expirence from "./components/expirence/expirence";
import Education from "./components/education/education";
import Frameworks from "./components/frameworks/framework";
import Languages from "./components/languages/languages";
import TechStack from "./components/techStack/techStack";
import Contact from "./components/contact/contact";
//css
import classes from "./page.module.css";

import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "400", "600", "700", "800"],
});

export default function Home() {
  let { message } = useContext(ThemeContext);

  const onChangeHandler = (e: any) => {};
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <body className={poppins.className}>
        <div className={classes.main_container}>
          <div>
            <Navbar />
          </div>
          <Contacts />

          <Hero></Hero>

          <Service></Service>

          <Expirence></Expirence>

          <Education></Education>

          <Frameworks></Frameworks>

          <Languages></Languages>

          <TechStack></TechStack>

          <Projects></Projects>

          <Contact></Contact>

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
      </body>
    </div>
  );
}
