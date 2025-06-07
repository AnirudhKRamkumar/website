import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer">
      <a href="https://linkedin.com/in/anirudh-ramkumar" target="_blank">
        <FaLinkedin color="white" />
      </a>
      <a href="https://github.com/AnirudhKRamkumar" target="_blank">
        <FaGithub color="white" />
      </a>
    </div>
  );
}

export default Footer;
