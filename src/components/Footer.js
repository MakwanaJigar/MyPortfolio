import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>

        <div className="footer">
            <div>
               <p className="name mx-2">Jigar Makwana</p>
               <p><i className="fa-solid fa-envelope mx-2"></i> <Link to='mailto:jigar317.certification@gmail.com' id='contactme'>Email :- jigar317.certification@gmail.com</Link></p>
               <p><i className='fa fa-phone mx-2'></i><Link to='tel:8511721552' id='contactme'>8511721552</Link></p>
            </div>

            <div className="address m-5">
            <p><i className="fa-sharp fa-solid fa-location-dot mx-2"></i>12-Harshidh Society radhanpur
             road opp.Kailash Stones,Mehsana-384002</p>
            </div>    

            <div className="socialmedia">
            <div className="btn btn-primary m-2"><i className='fa fa-github'></i></div>
            <div className="btn btn-success m-2"><i className='fa fa-instagram'></i></div>
            <div className="btn btn-danger m-2"><i className='fa fa-linkedin'></i></div>
 
            </div>

            
        </div>


    </>
  );
}

export default Footer;
