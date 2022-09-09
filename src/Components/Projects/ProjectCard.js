import React from "react";
import { Image } from "./Project.style";
import { Card } from "./Project.style";
import { motion } from "framer-motion";
import {BsGithub} from 'react-icons/bs'
import {VscLiveShare} from 'react-icons/vsc'
import useWindowSize from "../../hooks/useWindowSize";

const ProjectCard = ({ variant, src, title, link , link2, desc , tech }) => {
const size = useWindowSize()
console.log(size)
  return (
    <>
      <Card variants={variant}>
        <motion.div className='card__content'>
          <p>{title}</p>
          <div style={{display : 'flex' , gap: '15px' , marginTop:'2rem'}}>
          <a href={link} target='_blank' ><BsGithub className='sIcon' style={{fontSize : '20px'}} /></a>
          <a href={link2} target='_blank' ><VscLiveShare className='sIcon' style={{fontSize : '20px'}} /></a>
          </div>
     {
      (size.width > 1446) && (
        <>
          <li style={{margin : '25px' , fontSize:'1.5rem'}}>{desc}</li>
      <h3>TechStacks -</h3> 
       <ul style={{marginTop : '5px'}}>
       {
            tech?.map((item)=><li>{item}</li>)
       }
       </ul>
        </>
      )
     }    
        
        </motion.div>
        {/* <div style={{ width: "300px", height: "300px" }}></div> */}
        <a href={link} target='_blank'>
          <Image className='card__image' src={src} alt='' />
        </a>
      </Card>
    </>
  );
};

export default ProjectCard;
