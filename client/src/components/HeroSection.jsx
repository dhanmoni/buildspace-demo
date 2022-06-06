import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <div id="hero-section">
      <div id="title">
        Home to the <br /> <span>world's best</span> web3 <br /> builders.
      </div>
      <div id="sub-title">
        Buildspace accelerates your builder journey into web3. Whether you're
        just starting out, a seasoned vet transitioning from web2, or thinking
        of building something cool, you have a home with us. Join 60k+
        incredible builders doing just that.
      </div>
      <div id="action-btns">
        <div id="btn-project">
          <Link to="/login" style={{textDecoration:'none', color: '#333'}}>
            Start a Project
          </Link>
        </div>
        <div id="btn-discord">
          <Link to="/login" style={{textDecoration:'none', color: '#fff'}}>
            Join Discord
          </Link>
        </div>
        {/* <div id="btn-project">Start a Project</div>
        <div id="btn-discord">Join Discord</div> */}
      </div>
    </div>
  );
}

export default HeroSection;
