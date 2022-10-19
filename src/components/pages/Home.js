import React from "react";
import { Link } from "react-router-dom";
import Slider from "../include/Slider";
import Vision from "../include/Vision";
import services from "../images/services.jfif";
import services2 from "../images/services2.jfif";
import services1 from "../images/services1.jpg";
function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <Link to="/" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* our vision, mission and value */}
      <Vision />
      {/* Our Services */}
      <section className="section border-top ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 md-4 text-center">
              <h3 className="main-heading ">Our Services</h3>
              <div className="underline mx-auto mb-3"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={services}
                  className="w-100 border-bottom card_img"
                  alt="services"
                />
                <div className="card-body">
                  <h6>Services1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <Link to="services1" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={services2}
                  className="w-100 border-bottom card_img"
                  alt="services"
                />
                <div className="card-body">
                  <h6>Services 2</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <Link to="services2" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={services1}
                  className="w-100 border-bottom card_img"
                  alt="services"
                />
                <div className="card-body">
                  <h6>Services 3</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <Link to="services3" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
