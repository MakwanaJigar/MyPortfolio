import React, { useEffect } from 'react';
import BG1 from '../HD/BG5.jpg'
import{ Typewriter} from 'react-simple-typewriter';
import { Divider } from '@react-md/divider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
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

<div class="card bg-dark text-white" id='home'>
  <img src={BG1} class="card-img img-fluid" alt="..." style={{width:'100vw',height:'90vh',opacity:'0.4'}}/>
  <div class="card-img-overlay" style={{marginTop:'30vh',marginLeft:'5vh'}}>
    <h1 class="card-title">Hi,I'm Jigar Makwana</h1>
    <h3 class="card-text text-warning"><Typewriter
            loop
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Frontend Developer']}
      /></h3>
      <div className="btn btn-primary m-2"><i className='fa fa-github'></i></div>
      <div className="btn btn-success m-2"><i className='fa fa-instagram'></i></div>
      <div className="btn btn-danger m-2"><i className='fa fa-linkedin'></i></div>
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
              <Divider  style={{width:'15vw',top: '20px',
                  border: 'none',
                  height: '12px',
                  background: '#0FFF50'}}/>
            </div> 

            {/* JAVASCRIPT */}

            <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">JavaScript</h6>
              <Divider  style={{width:'20vw',top: '20px',
                  border: 'none',
                  height: '12px',
                  background: '#0FFF50'}}/>
            </div> 

            {/* NODEJS */}

            <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">NodeJS</h6>
              <Divider  style={{width:'18vw',top: '20px',
                  border: 'none',
                  height: '12px',
                  background: '#0FFF50'}}/>
            </div> 

            {/* HTML | CSS */}

            <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">HTML/CSS</h6>
              <Divider  style={{width:'23vw',top: '20px',
                  border: 'none',
                  height: '12px',
                  background: '#0FFF50'}}/>
            </div> 

            {/* BOOTSTRAP */}

            <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">Bootstrap</h6>
              <Divider  style={{width:'25vw',top: '20px',
                  border: 'none',
                  height: '12px',
                  background: '#0FFF50'}}/>
            </div> 

            {/* TAILWIND */}

            <div className="language" data-aos='fade-left'>
            <h6 className=" fw-bold me-2 tech">Tailwind</h6>
            <Divider  style={{width:'15vw',top: '20px',
                  border: 'none',
                  height: '12px',
                  background: '#0FFF50'}}/>
            </div> 

        </div>

    </div>
    </>
  );
}

export default Home;
