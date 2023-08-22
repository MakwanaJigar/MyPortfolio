import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init(
      {
        offset: 120,
        duration: 1000
      }
    );
  },[])
  return (
    <>
      <div className="main" id='about' data-aos="zoom-out-left">
            <h1 className='Experience'>Work Experience</h1>

            {/* ...........MAIN CONTENT..........  */}
            <div className="informations">
            <div className="Myinfo">
              <div className="first"></div>
              <h6 className='year'>1 Feb - 1 Sep 2023</h6>
              <p className='company'>Jr. Frontend Developer</p>
              <p className='company'>Manami Solutions - Ahmedabad,Gujarat</p>
              <p className='discriptions'>
                          We're seeking a Junior Frontend Developer experienced in React,
                          Node.js, JavaScript, and Bootstrap. Collaborate with our team to
                          craft appealing web interfaces, leveraging your skills in frontend
                          development to enhance user experiences </p>
            </div>
            </div>

      </div>

     

    </>
  );
}

export default About;
