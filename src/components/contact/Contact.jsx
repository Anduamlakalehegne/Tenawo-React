import React from "react";

export default function Contact() {
  return (
    <section id="contactus" className="contact p-0 position-relative">
      <div className="bg-overlay bg-color"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div id="google-map" className="bg-light-gray map"></div>
          </div>

          <div className="col-md-6">
            <div className="address-box tittle mb-0 bg-img4 ml-0 ml-md-5">
              {/* overlay */}
              <div className="bg-overlay opacity-8"></div>
              <div className="address-text alt-font text-md-left text-white position-relative wow fadeInUp">
                <h5 className="mb-3 text-capitalize contact-subtitle font-weight-light">
                  Contact Us
                </h5>

                {/* title */}
                <h2 className="mb-4 main-font map-text text-capitalize">
                  KMS ETH Health Trading S.C
                </h2>

                {/* Address */}
                <p className="mb-3">
                  Address: Ethiopia, Addis Ababa, Bole Sub-City,Woreda 07, Figa
                  Mazoria Area, Gebrila Building, Office No. 302
                </p>

                {/* Short number */}
                <h1 className="mb-3">9456</h1>

                {/* Phone */}
                <p className="mb-3">
                  Office Telephone : +251116683203/04
                  <br />
                  Mobile : +251904868788
                </p>

                {/* Email */}
                <p className="mb-3">
                  mail : KMS@tenawo.com
                  <br />
                  Inquiries : kmstenawo@gmail.com
                </p>

                {/* Timing */}
                <p className="mb-3">
                  Our support available to help you 24 hours a day, seven days
                  week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
