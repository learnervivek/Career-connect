import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <div className="sectionHeader">
            <h2>How Career Connect Works</h2>
            <p>Simple 3-step process to find your perfect job</p>
          </div>
          <div className="stepsContainer">
            <div className="step">
              <div className="stepNumber">1</div>
              <div className="stepIcon">
                <FaUserPlus />
              </div>
              <h4>Create Account</h4>
              <p>
                Sign up in minutes with your email or social media. Build your professional profile and showcase your skills to employers.
              </p>
            </div>
            <div className="connector"></div>
            <div className="step">
              <div className="stepNumber">2</div>
              <div className="stepIcon">
                <MdFindInPage />
              </div>
              <h4>Find a Job or Post a Job</h4>
              <p>
                Browse thousands of job listings or post your job opening. Use advanced filters to find the perfect match.
              </p>
            </div>
            <div className="connector"></div>
            <div className="step">
              <div className="stepNumber">3</div>
              <div className="stepIcon">
                <IoMdSend />
              </div>
              <h4>Apply & Get Recruited</h4>
              <p>
                Apply for jobs instantly or recruit suitable candidates. Connect with the right talent and start your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
