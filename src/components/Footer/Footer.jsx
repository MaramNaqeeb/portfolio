import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      <motion.div style={{width:"50%"}}
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`} >
        <div className={css.left} >
          <span className="secondaryText">
            Let's make something <br />
            amazing together.<br/>
            Start by <a  href="mailto:maramnaqib1998@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <p>Palestinian Authority</p>
          </div>
          
          <ul  className={css.menu}>
            <li>Feel Free to contact me through</li>
            <div   style={{display:"inline-flex"}}>

            <li  style={{width:"30%"}}><a  href="https://www.linkedin.com/in/maramnaqib/"><img   style={{width:"50%",display:"inline-flex"}} src="link.png" alt="linkedin"></img></a></li>
              <li  style={{width:"40%"}}><a href="https://github.com"><img  style={{width:"40%"}}src="gitHub.png" alt="github"></img></a></li>
              <li  style={{width:"40%"}}><a href="mailto:maramnaqib1998@gmail.com"><img  style={{width:"40%"}}src="gmail.png" alt="gmail"></img></a></li>
          
          </div>
     
          </ul>

          </div>

      </motion.div>
    </motion.section>
  );
};

export default Footer;
