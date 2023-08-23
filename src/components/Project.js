import React, { useEffect } from 'react';
import contactIMG from '../ProjectIMG/ContactApp.png'
import newsIMG from '../ProjectIMG/NewsApp.png'
import iCoderIMG from '../ProjectIMG/iCoder.jpg'
import TextUtilsIMG from '../ProjectIMG/TextUtils.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
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

    <div className="ProjectInfo" id='project'>

     {/* ..............PROJECTS INFORMATION......... */}
      <h1 className='Projects'>Projects</h1>
       <div className="container my-4">
          <div
            className="row featurette d-flex  justify-content-start align-items-start mb-4"
            data-aos="fade-left"
          >
            <div className="col-md-7 order-md-2">
              <Link className="featurette-heading h4 fw-normal lh-1" to='https://github.com/MakwanaJigar/ContactAppSearch' id='ProjectHeading' >
              Contact App
              </Link>
              <p className="lead">
              A sleek contact app using React.js, JavaScript, HTML/CSS, and
              Bootstrap. Manage, edit, and locate contacts with ease. Securely
              store details, notes, and profile pictures. User-friendly for efficient
              contact management.
              </p>
            </div>
            {/* <div className="col-md-5 order-md-1 ">
                <img src={contactIMG}  className="img-fluid" alt="..." />
            
            </div> */}
          </div>

          <div
            className="row featurette d-flex justify-content-end align-items-end mb-4"
            data-aos='fade-right'
          >
            <div className="col-md-7 order-md-1">
              <Link className="featurette-heading fw-normal h4 lh-1" to='https://github.com/MakwanaJigar/NewsApp' id='ProjectHeading'>
              News App
              </Link>
              <p className="lead">
              The "News App" project expertly fuses Bootstrap, React, HTML,
              CSS, and JavaScript to create an immersive and feature-rich web
              application that keeps users informed and engaged
              </p>
            </div>
            {/* <div className="col-md-5 order-md-1">
                <img src={newsIMG} className="img-fluid" alt="..." />
            </div> */}
          </div>

            <div
              className="row featurette d-flex  justify-content-start align-items-start mb-4"
              data-aos="fade-left"
            >
              <div className="col-md-7 order-md-2">
                <Link className="featurette-heading h4 fw-normal lh-1" to='https://github.com/MakwanaJigar/TextUtils' id='ProjectHeading'>
                TextUtils
                </Link>
                <p className="lead">
                "TextUtils" project ingeniously merges Bootstrap and React,
                producing a dynamic user interface that offers heightened
                responsiveness for text-related tasks.
                </p>
              </div>
              {/* <div className="col-md-5 order-md-1">
                  <img src={TextUtilsIMG} className="img-fluid" alt="..."/>
              </div> */}
            </div>


            <div
            className="row featurette d-flex justify-content-end align-items-end"
            data-aos='fade-right'
          >
            <div className="col-md-7 order-md-1">
              <Link className="featurette-heading h4 fw-normal lh-1" to='https://github.com/MakwanaJigar/iCoderWebSite' id='ProjectHeading'>
              iCoder
              </Link>
              <p className="lead">
              This project was created using Bootstrap to ensure a responsive and
              visually appealing design.
              </p>
            </div>
            {/* <div className="col-md-5 order-md-1">
                <img src={iCoderIMG} className="img-fluid mb-3" alt="..."/>
            </div> */}
          </div>  



    </div>  

    </div>


    </>
  );
}

export default Project;
