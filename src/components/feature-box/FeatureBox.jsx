import React from "react";

export default function FeatureBox() {
  return (
    <section id="join-us" className="features feature-content p-0 pb-60">
      <div className="container">
        <div className="row mx-0 ">
          {/* Column item */}
          <div className="col flip p-0 mr-4">
            <div className="front">
              <div className="feature-col one">
                <div className="box center-block">
                  <div className="feature-icon">
                    <i className="fas fa-stethoscope"></i>
                  </div>
                  <h4 className="mb-4 main-font">Medical Consling</h4>
                  <p className="text-white mb-4 text-center">
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor.Aenean sollicitudin۔
                  </p>
                </div>
              </div>
            </div>

            <div className="back">
              <div className="feature-col-1 one-1">
                <div className="box center-block">
                  <div className="feature-icon">
                    <i className="fas fa-stethoscope"></i>
                  </div>
                  <h4 className="mb-4 theme-dark main-font">
                    Medical Conseling
                  </h4>
                  <p className="theme-dark mb-4 text-center">
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor.Aenean sollicitudin۔
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column item */}
          <div className="col flip p-0 ">
            <div className="front">
              <div className="feature-col two">
                <div className="box center-block">
                  <div className="feature-icon">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <h4 className="mb-4 main-font">Qualified Doctors</h4>
                  <p className="text-white mb-4 text-center">
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor.Aenean sollicitudin
                  </p>
                </div>
              </div>
            </div>

            <div className="back">
              <div className="feature-col-2 two-2">
                <div className="box center-block">
                  <div className="feature-icon">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <h4 className="theme-dark mb-4 main-font">
                    Qualified Doctors
                  </h4>
                  <p className="theme-dark mb-4 text-center">
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor.Aenean sollicitudin
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column item */}
          <div className="col flip p-0 ml-3">
            <div className="front">
              <div className="feature-col three">
                <div className="box center-block">
                  <div className="feature-icon">
                    <i className="fas fa-stopwatch"></i>
                  </div>
                  <h4 className="mb-4 main-font">Opening Hours</h4>
                  <div className="timing mb-3">
                    <div className="mwf">
                      Monday - Friday <span className="time-line"></span> 04.00
                      - 08.00
                    </div>
                  </div>
                  <div className="timing mb-3">
                    <div className="mwf">
                      Monday - Friday <span className="time-line"></span> 04.00
                      - 08.00
                    </div>
                  </div>
                  <div className="timing mb-3">
                    <div className="mwf">
                      Monday - Friday <span className="time-line"></span> 04.00
                      - 08.00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="back">
              <div className="feature-col-3 three-3">
                <div className="box center-block">
                  <div className="feature-icon light-blu">
                    <i className="fas fa-stopwatch"></i>
                  </div>
                  <h4 className="mb-4 main-font">Opening Hours</h4>
                  <div className="timing mb-3">
                    <div className="mwf">
                      Monday - Friday <span className="time-line"></span> 04.00
                      - 08.00
                    </div>
                  </div>
                  <div className="timing mb-3">
                    <div className="mwf">
                      Monday - Friday <span className="time-line"></span> 04.00
                      - 08.00
                    </div>
                  </div>
                  <div className="timing mb-3">
                    <div className="mwf">
                      Monday - Friday <span className="time-line"></span> 04.00
                      - 08.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
