import React from "react";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="department-sub alt-font text-center">
              <p>Some services that we will provide now and in the future.</p>
            </div>
            <div className="department-title main-font text-center">
              <h2>
                Mobile App<span className="title-clr"> Access</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="feature-item mb-md-0 mb-5">
              <span className="icon">
                <i aria-hidden="true" className="fa-solid fa-pills"></i>
              </span>

              <div className="text feature-txt">
                <h4 className="feature-heading">
                  Searching and buy drugs online
                </h4>
              </div>
            </div>

            <div className="feature-item mb-md-0 mb-5">
              <span className="icon-2">
                <i aria-hidden="true" className="fa-solid fa-user-doctor"></i>
              </span>

              <div className="text feature-txt">
                <h4 className="feature-heading">
                  Online doctor consultation and appointment
                </h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-item mb-md-0 mb-5">
              <span className="icon-2">
                <i aria-hidden="true" className="fa-solid fa-calendar"></i>
              </span>
              <div className="text feature-txt">
                <h4 className="feature-heading">
                  Booking online private hospitals
                </h4>
              </div>
            </div>

            <div className="feature-item mb-md-0 mb-5">
              <span className="icon">
                <i aria-hidden="true" className="fas fa-microscope"></i>
              </span>
              <div className="text feature-txt">
                <h4 className="feature-heading">Labratory</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-item mb-md-0 mb-5">
              <span className="icon">
                <i aria-hidden="true" className="fa-solid fa-truck-medical"></i>
              </span>

              <div className="text feature-txt">
                <h4 className="feature-heading">Easy ambulance services</h4>
              </div>
            </div>
            <div className="feature-item">
              <span className="icon-2">
                <i aria-hidden="true" className="fa-solid fa-bed-pulse"></i>
              </span>

              <div className="text feature-txt">
                <h4 className="feature-heading">Oxygen plants</h4>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <a
              href="#"
              className="btn btn-lg btn-primary mx-auto mt-5"
              style={{ borderRadius: "50px 50px 50px 50px" }}
            >
              see more...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
