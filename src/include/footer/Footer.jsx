import React from "react";

export default function Footer() {
  return (
    <section className="text-center footer-sec">
      <h2 className="d-none">hidden</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-social">
              <ul className="list-unstyled text-white">
                <li>
                  <a
                    className="wow fadeInUp facebook-bg-hvr"
                    href="javascript:void(0);"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="wow fadeInDown twitter-bg-hvr"
                    href="javascript:void(0);"
                  >
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="wow fadeInUp google-bg-hvr"
                    href="javascript:void(0);"
                  >
                    <i className="fab fa-google-plus-g" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="wow fadeInDown linkedin-bg-hvr"
                    href="javascript:void(0);"
                  >
                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="wow fadeInUp instagram-bg-hvr"
                    href="javascript:void(0);"
                  >
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <p className="company-about fadeIn theme-dark text-capitalize">
              © 2021 TENAWO. KMS ETH Health Trading S.C
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
