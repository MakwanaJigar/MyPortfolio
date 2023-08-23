import React, { useEffect } from 'react';
import BG1 from '../HD/BG2.jpg'
import{ Typewriter} from 'react-simple-typewriter';
import { Divider } from '@react-md/divider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
import fileDownload from 'js-file-download';


const Home = () => {

  // FOR DOWNLOAD MY RESUME
  const Download = (e) => {
    e.preventDefault();
    console.log('Download function called'); // Check if this log is printed
    axios({
      url: "http://localhost:8000/",
      method: "GET",
      responseType: "blob"
    }).then((res) => {
      console.log('Download success:', res); // Check if this log is printed
      alert("Resume Download Successfully");
      fileDownload(res.data, "resume.pdf");
    }).catch((error) => {
      console.error("Error downloading file:", error);
    });
  };



  // const Download = (e) => {
  //   e.preventDefault();
  //   axios({
  //     url: "http://localhost:8000/",
  //     method: "GET",
  //     responseType: "blob"
  //   }).then((res) => {
  //     alert("Resume Download Successfully");
  //     fileDownload(res.data, "resume.pdf"); // Provide the correct filename and extension
  //   }).catch((error) => {
  //     console.error("Error downloading file:", error);
  //   });
  // };
  

// const Download = (e) => {
//     e.preventDefault();
//     axios({
//       url:"http://localhost:8000/",
//       method:"GET",
//       responseType:"blob"
//     }).then((res) => {
//         alert("Resume Download Successfully");
//         fileDownload(res.data,"Successfully Download");
        
//     });
// };

// FOR COMPONENT ANIMATION

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

<div className="card bg-dark text-white" id='home'>
  <img src={BG1} className="card-img img-fluid" alt="..." style={{width:'100vw',height:'90vh',opacity:'0.4',borderRadius:'0'}}/>
  <div className="card-img-overlay" style={{marginTop:'30vh',marginLeft:'5vh'}}>
    <h1 className="card-title">Hi,I'm Jigar Makwana</h1>
    <h3 className="card-text text-warning" style={{textTransform:'uppercase',}}><Typewriter
            loop
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Frontend Developer']}
      /></h3>
      
  <div className="btn btn-danger" 
  onClick={(e) => Download(e)}
  >My Resume<i class="fa-solid fa-download mx-2"></i></div>
  </div>

</div>

      {/*...........main content........... */}

    <div className="main">
        <div className="languagebar">4

        <h1 className='EPtitle' data-aos="zoom-in">PROFESSIONAL</h1>
        <h4 className='knowledge' data-aos='zoom-in'>MY KNOWLEDGE LEVEL IN SOFTWARE</h4>

            {/* REACT  */}

           <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">ReactJS</h6>
              <Divider  style={{width:'15vw',top: '3vh',
                  border: 'none',
                  height: '1vh',
                  background: '#0FFF50'}}/>
            </div> 

            {/* JAVASCRIPT */}

            <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">JavaScript</h6>
              <Divider  style={{width:'20vw',top: '3vh',
                  border: 'none',
                  height: '1vh',
                  background: '#0FFF50'}}/>
            </div> 

            {/* NODEJS */}

            <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">NodeJS</h6>
              <Divider  style={{width:'18vw',top: '3vh',
                  border: 'none',
                  height: '1vh',
                  background: '#0FFF50'}}/>
            </div> 

            {/* HTML | CSS */}

            <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">HTML/CSS</h6>
              <Divider  style={{width:'23vw',top: '3vh',
                  border: 'none',
                  height: '1vh',
                  background: '#0FFF50'}}/>
            </div> 

            {/* BOOTSTRAP */}

            <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">Bootstrap</h6>
              <Divider  style={{width:'25vw',top: '3vh',
                  border: 'none',
                  height: '1vh',
                  background: '#0FFF50'}}/>
            </div> 

            {/* TAILWIND */}

            <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">Tailwind</h6>
            <Divider  style={{width:'15vw',top: '3vh',
                  border: 'none',
                  height: '1vh',
                  background: '#0FFF50'}}/>
            </div> 

        </div>

    </div>
    </>
  );
}

export default Home;
