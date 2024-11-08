import loadingAnimation from '../assets/animation.gif';
import CV from '../assets/Rohit CV.pdf';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

const Maintenance = () => {
  return (
      <div className="maintenance-page">
          <div className="animation-container">
              <img src={loadingAnimation} alt="loading" className="animation-image"/>
          </div>
          <div className="maintenance-page-link">
              <a href="https://www.linkedin.com/in/rohitsingh-dev/" >
                  <FontAwesomeIcon icon={faLinkedinIn} className="social-icon"/>
              </a>

              <a href="https://github.com/RohitSingh-dev" >
                  <FontAwesomeIcon icon={faGithub} className="social-icon"/>
              </a>

              <a href="https://x.com/not_a_zenin" >
                  <FontAwesomeIcon icon={faXTwitter} className="social-icon"/>
              </a>

              <a download="" href={CV}>
                  <FontAwesomeIcon icon={faDownload} className="social-icon"/>
              </a>
          </div>
      </div>
  )
}
export default Maintenance