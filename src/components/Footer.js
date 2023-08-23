import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>

{/* <!-- Footer --> */}
<footer className="text-center text-lg-start" style={{backgroundColor:'black',color:'white'}}>
  <hr/>
  {/* <!-- Section: Social media --> */}
 
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Home  Address
          </h6>
          <p>
          12-Harshidh Society radhanpur
             road opp.Kailash Stones,Mehsana-384002
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4" >
            Skills
          </h6>
          <p >
            <a href="#!" className="text-reset" style={{textDecoration:'none'}}>ReactJS</a>
          </p>
          <p>
            <a href="#!" className="text-reset" style={{textDecoration:'none'}}>NodeJS</a>
          </p>
          <p>
            <a href="#!" className="text-reset" style={{textDecoration:'none'}}>JavaScript</a>
          </p>
          <p>
            <a href="#!" className="text-reset" style={{textDecoration:'none'}}>HTML/CSS</a>
          </p>
          <p>
            <a href="#!" className="text-reset" style={{textDecoration:'none'}}>Bootstrap</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
          <p><Link to='mailto:jigar317.certification@gmail.com' style={{textDecoration:'none'}}>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            jigar317.certification@gmail.com
            </Link>
          </p>
          <p>
            <Link to='tel:8511721552' style={{textDecoration:'none'}}>
            <i className="fas fa-phone me-3 text-secondary"></i> + 91 85117 21552
            </Link>
            </p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <!-- Left --> */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  {/* <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div> */}
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}


        {/* <div className="footer">
            <div>
               <p className="name">Jigar Makwana</p>
               <p><i className="fa-solid fa-envelope "></i> <Link to='mailto:jigar317.certification@gmail.com' id='contactme'>Email :- jigar317.certification@gmail.com</Link></p>
               <p><i className='fa fa-phone '></i><Link to='tel:8511721552' id='contactme'>8511721552</Link></p>
            
            <div className="socialmedia">
            <p className="btn btn-primary"><i className='fa fa-github'></i></p>
            <p className="btn btn-success"><i className='fa fa-instagram'></i></p>
            <p className="btn btn-danger"><i className='fa fa-linkedin'></i></p>
            </div>
            </div>

            <div className="address">
            <p><i className="fa-sharp fa-solid fa-location-dot mx-2"></i>12-Harshidh Society radhanpur
             road opp.Kailash Stones,Mehsana-384002</p>
            </div>   
        </div> */}

    </>
  );
}

export default Footer;
