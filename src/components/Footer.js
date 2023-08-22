import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>

        <div className="footer">
            <div>
               <p className="name mx-2">Jigar Makwana</p>
               <p><i class="fa-solid fa-envelope mx-2"></i> <Link to='mailto:jigar317.certification@gmail.com' id='contactme'>Email :- jigar317.certification@gmail.com</Link></p>
               <p><i className='fa fa-phone mx-2'></i><Link to='tel:8511721552' id='contactme'>8511721552</Link></p>
            </div>

            <div className="address m-5">
            <p><i class="fa-sharp fa-solid fa-location-dot mx-2"></i>12-Harshidh Society radhanpur
             road opp.Kailash Stones,Mehsana-384002</p>
            
            </div>    


        </div>


    </>
  );
}

export default Footer;
