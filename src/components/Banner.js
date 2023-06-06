/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// images
import Image from "../assets/avatar.png";
// import icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[42px] font-bold leading-[0.8] lg:text-[72px]"
            >
              MD AL <span>Mamun</span>
            </motion.h1>
            <motion.div
             variants={fadeIn("up", 0.4)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
             className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "YouTuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint comm
            </motion.p>
            <motion.div 
             variants={fadeIn("up", 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </motion.div>
            {/* social links */}
            <motion.div 
             variants={fadeIn("up", 0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/* images */}
          <motion.div 
           variants={fadeIn("down", 0.5)}
           initial="hidden"
           whileInView={"show"}
           
          className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] w-96 ">
            <img src={Image} alt=""/>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Banner;
