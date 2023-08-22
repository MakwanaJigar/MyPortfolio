import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container mycontactform" id="contact">
        <div
          className="row m-5 no-gutters shadow-lg"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-md-6 d-none d-md-block">
            <h3>CONTACT</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <Link to="tel:8511721552">Tel: 8511721552</Link>
          </div>
          <div className="col-md-6 p-5">
            {/* <img src=''className='mb-5' style={{width:'25vw'}} alt="" /> */}

            <div className="form-style">
              <form>
                <div className="form-group pb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    id="exampleInputFirstName"
                    aria-describedby="firstnameHelp"
                  />
                </div>
                <div className="form-group pb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    id="exampleInputLastName"
                    aria-describedby="lastnameHelp"
                  />
                </div>
                <div className="form-group pb-3">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group pb-3">
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="pb-2">
                  <button
                    type="submit"
                    className="btn w-100 font-weight-bold mt-2"
                    style={{background:'#08f26e'}}
                  >
                    SEND
                  </button>
                </div>
              </form>

              <div className="social">
               <div className="btn btn-outline-light m-2"> <i className="fa fa-instagram"></i></div>
               <div className="btn btn-outline-light m-2"> <i className="fa fa-github"></i></div>
               <div className="btn btn-outline-light m-2"><i className="fa fa-linkedin"></i></div>
               <div className="btn btn-outline-light m-2"><i className="fa fa-facebook"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
