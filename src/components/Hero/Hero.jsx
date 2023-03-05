import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Maram Naqeeb
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I am a Full_Stack developer
          
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./maram.png" alt="" />
        </motion.div>
        <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.email} > 
        <a className={css.email} href="mailto:maramnaqib1998@gmail.com">
          maramnaqib1998@gmail.com
        </a>
        </motion.div>

        <div className={css.lowerElements}>
        <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.icons}>
            <div style={{display:"inline-flex"}} className="secondaryText">
        <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.icons}>
               
            <div style={{width:"150%"}} ><a href="https://www.linkedin.com/in/maramnaqib/"><img src="link.png" alt="linkedin"></img></a></div>
            </motion.div>

              <div><a href="https://github.com"><img src="gitHub.png" alt="github"></img></a></div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.icons}>
            <img src="./certificateImage.png" alt="" />
            <span>CERTIFIED Full-Stack</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
