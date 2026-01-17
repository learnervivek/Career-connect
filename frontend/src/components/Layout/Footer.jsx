import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Vivek Kumar Gupta</div>
<div>
  <Link to={'https://github.com/learnervivek'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://leetcode.com/u/learnervivek/'} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'https://www.linkedin.com/in/learnervivek/'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
</div>
      
    </footer>
  )
}

export default Footer