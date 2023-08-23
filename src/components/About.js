import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init(
      {
        offset: 300,
        duration: 1000
      }
    );
  },[])
  return (
    <div className='' id='about'>
         <h1 className='Experience' >Work Experience</h1>
      {/* <div className="main" id='about' > */}
           

      <div
        class="row featurette d-flex  justify-content-start align-items-start text-light m-2"
        data-aos="zoom-out-left"
        
      >
        <div class="col-md-7 order-md-2">
          <h6 class="featurette-heading fw-normal lh-1" style={{color:'#50C878'}}>
          1 Feb - 1 Sep 2023
          </h6>
          <p className='fw-bold'>Jr. Frontend Developer</p>
          <p className='fw-bold text-danger'>Manami Solutions - Ahmedabad,Gujarat</p>
          <p class="lead">
                          We're seeking a Junior Frontend Developer experienced in React,
                          Node.js, JavaScript, and Bootstrap. Collaborate with our team to
                          craft appealing web interfaces, leveraging your skills in frontend
                          development to enhance user experiences
          </p>
        </div>
        <div class="col-md-5 order-md-1">
            <img src=""  class="img-fluid" alt="..."/>
         
        </div>
      </div>

            
            {/* ...........MAIN CONTENT..........  */}
            {/* <div className="informations m-2">
            <div className="Myinfo">
              <div className="first"></div>
              <h6 className='year'>1 Feb - 1 Sep 2023</h6>
              <p className='company'>Jr. Frontend Developer</p>
              <p className='company'>Manami Solutions - Ahmedabad,Gujarat</p>
              <p className='discriptions w-50'>
                          We're seeking a Junior Frontend Developer experienced in React,
                          Node.js, JavaScript, and Bootstrap. Collaborate with our team to
                          craft appealing web interfaces, leveraging your skills in frontend
                          development to enhance user experiences </p>
            </div>
            </div> */}

      {/* </div> */}

     

    </div>
  );
}

export default About;
