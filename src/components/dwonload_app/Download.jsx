import React from "react";
import playstore from "../../assets/img/Google_Play_Store.png";
import appstore from "../../assets/img/app_Store.png";
import mobile from "../../assets/img/mobile2.jpg";

export default function Download() {
  return (
    <section id="whymegaone" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="container">
            <div
              className="main-title style-two d-flex justify-content-md-around align-items-center flex-column flex-md-row text-center text-md-left wow fadeIn"
              data-wow-delay="300ms"
            >
              <div className="col-md-7 mb-4 mb-md-0">
                <h5>Easy and Fast</h5>
                <h2 className="pb-0">
                  Download Tenawo App on
                  <span className="family">Playstore</span> and
                  <span className="family">Appstore</span>
                </h2>
                <h2 className="pb-0 pt-4">Availabe now on:</h2>
                <div className="row">
                  <div className="col-md-6">
                    <a href="#">
                      <img src={playstore} alt="playstore" />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#">
                      <img src={appstore} alt="appstore" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ml-md-4 pl-md-2">
                <img src={mobile} alt="mobile" style={{ height: "30rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
