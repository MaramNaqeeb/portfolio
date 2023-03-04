import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant} from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>

        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Projects</span>
          </div>
          <span style={{paddingRight:"100px"}} className="secondaryText"><a href="https://github.com">Explore my projects</a></span>
        </motion.div>
      
        <div className={`flexCenter ${css.showCase}`}>
            <motion.img  variants={fadeIn("up", "tween", .5, .6)} src="./carchive.png" alt="project"   />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./qaatiImg.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./dentist.png" alt="project" />
      
        </div>

      </div>
     
      
    </motion.section>
    
  );
};

export default Portfolio;
