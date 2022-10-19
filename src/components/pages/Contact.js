import React from "react";
function Contact() {
  return (
    <div>
      <section className="py-3 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-auto text-center">
              <h5>Contact Us</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-end">
                  <h5 className="main-heading">Contact Form</h5>
                  <div className="underline"></div>
                  <hr />
                  <form>
                  <div className="form-group">
                    <label className="mb-1">Full Name :</label>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Enter Your Full Name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Mobile Number :</label>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Enter Your Full Name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email Address :</label>
                    <input
                      type="email"
                      name=""
                      className="form-control"
                      placeholder="Enter Your Full Name"
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message :</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      placeholder="Please type your message"
                    ></textarea>
                  </div>
                  <div className="form-group py-3">
                    <button type="Submit"
                      className="btn btn-primary shadow w-100 "
                    >
                    
                      Send Message
                    </button>
                  </div>
                  </form>
                </div>
                <div className="col-md-6"> 
                
                <h5 className="main-heading">Address Information</h5>
                <div className="underline"></div>
                <p>
                   Hinjwadi , Pune , Maharashtra , India
                </p>
                <p>
                    Mobile No : +91 9765197170
                </p>
                <p>
                    Email Address : faizahmed7170@gmail.com
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
