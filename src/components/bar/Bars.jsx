import React from "react";

export default function Bars() {
  return (
    <section className="pt-0">
      <h2 className="d-none">aas</h2>
      <div className="container">
        <div className="row">
          <div className="col-12 my-auto">
            <div className="row">
              <div className="col-lg-6">
                <div className="skills alt-font">
                  <div className="prog-item">
                    <p>Treatment of Infectious Diseases</p>
                    <div className="skills-progress">
                      <span className="bar-light" data-value="88%"></span>
                    </div>
                  </div>
                  <div className="prog-item">
                    <p>Fast and Effective Diet</p>
                    <div className="skills-progress">
                      <span className="bar-dark" data-value="78%"></span>
                    </div>
                  </div>
                  <div className="prog-item mb-lg-0">
                    <p>Blood Test</p>
                    <div className="skills-progress">
                      <span className="bar-light" data-value="94%"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="skills alt-font">
                  <div className="prog-item">
                    <p>The Study of Hearing and Eyesight</p>
                    <div className="skills-progress">
                      <span className="bar-dark" data-value="85%"></span>
                    </div>
                  </div>
                  <div className="prog-item">
                    <p>Tests for Professional Drivers</p>
                    <div className="skills-progress">
                      <span className="bar-light" data-value="90%"></span>
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
