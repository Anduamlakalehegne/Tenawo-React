import React from "react";

export default function WhyTenawo() {
  return (
    <section id="whymegaone" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="container">
            <h1
              className="text-center pb-3"
              style={{ fontFamily: "Poppins", fontSize: "3.5rem" }}
            >
              Why Choose Us
            </h1>
            <div
              className="main-title style-two d-flex justify-content-md-around align-items-center flex-column flex-md-row text-center text-md-left wow fadeIn"
              data-wow-delay="300ms"
            >
              <div className="col-md-5 mb-4 mb-md-0">
                <h2 className="pb-0">
                  We Value Your <span className="family">Family</span> More Than
                  Anyone Else.
                </h2>
              </div>
              <div className="col-md-7 ml-md-4 pl-md-2">
                <ul
                  class="list-group list-group-flush "
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    color: "aqua",
                  }}
                >
                  <li class="list-group-item">Saves your time and money</li>
                  <li class="list-group-item">
                    You can find drugs or services within 500 meter radius
                  </li>
                  <li class="list-group-item">100 % safe and simple</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
