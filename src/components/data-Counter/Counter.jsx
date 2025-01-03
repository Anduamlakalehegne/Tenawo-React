import React from "react";

export default function Counter() {
  return (
    <section className="bg-counter demo-banner">
      <h2 className="d-none">as</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="serial-box">
              <span className="count">1538</span>
              <div className="count-line"></div>
              <p>Patients</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="serial-box">
              <span className="count">1006</span>
              <div className="count-line"></div>
              <p>Cases</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="serial-box">
              <span className="count">2115</span>
              <div className="count-line"></div>
              <p>Appointments</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="serial-box mb-0">
              <span className="count">179</span>
              <div className="count-line"></div>
              <p>Doctor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
