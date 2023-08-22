import React from 'react';

const About = () => {
  return (
    <>
      <div className="main" id='about'>
            <h1 className='Experience'>Work Experience</h1>

            {/* ...........MAIN CONTENT..........  */}
            <div className="informations m-2">
            <div className="Myinfo">
              <div className="first"></div>
              <h6 className='year'>1 Feb - 1 Sep 2023</h6>
              <p className='company'>Jr. Frontend Developer</p>
              <p className='company'>Manami Solutions - Ahmedabad,Gujarat</p>
              <p className='discriptions'>We're seeking a Junior Frontend Developer experienced in React,
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
