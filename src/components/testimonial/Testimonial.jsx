import React from "react";
import abenezer from "../../assets/img/teams/abenezer.jpg";
import anmut from "../../assets/img/teams/anmut.jpg";
import dawit from "../../assets/img/teams/dawit.jpg";
import degu from "../../assets/img/teams/degu.jpg";
import ishac from "../../assets/img/teams/ishac.jpg";
import kibru from "../../assets/img/teams/kibru.jpg";
import meseret from "../../assets/img/teams/meseret.jpg";
import sisay from "../../assets/img/teams/sisay.jpg";
import wondmu from "../../assets/img/teams/wondmu.jpg";

export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-testimonial my-5">
      <div className="container">
        <div className="row">
          <div className="test">
            <div className="testimonial-title">
              <h2>Our Team</h2>
            </div>
            <div className="testimonial-subtitle">
              <p>
                Our board members are Professionals and innovators from various
                backgrounds from Ethiopia, Canada, the United Kingdom, and the
                United States of America. .
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div id="testimonial_slider" className="owl-carousel">
            {/* teams item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-left testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Founder, Chief Executive Officer (CEO) and Board Member of KMS
                ETH Health Trading S.C
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={abenezer} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Abenezer Yoseph Kebede (BSc.)
              </h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>

            {/* teams item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-left testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Assistant Professor of Clinical Midwifery, Founder and Board
                Member of KMS ETH Health Trading S.C
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={anmut} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Animut Tagele Tamiru (BSc., M.Sc.)
              </h5>
              <span className="destination main-font">Florida, USA</span>
            </div>

            {/* teams item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-left testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Nuclear Physicist, Software Engineer - Founder and Board Member
                of KMS ETH Health Trading S.C
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={dawit} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Dawit Adugna Werdofa (BSc., MSc.)
              </h5>
              <span className="destination main-font">London, USA</span>
            </div>

            {/* teams item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-right testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Founding Member of KMS ETH Health Trading S.C
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={degu} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Degu Taye Tolossa (MD, MPH)
              </h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>

            {/* teams item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-right testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Clinical Pharmacist, Founder and Board chair of KMS ETH Health
                Trading S.C
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={ishac} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Ishac Mohammed Adem (BSc., PharmD)
              </h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>

            {/* teams item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-right testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Medical Laboratory Technologist, Founder, Board Secretary,
                Communication and PR of KMS ETH Health Trading S.C
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={kibru} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Kibruyisfa Mekbeb Tadesse (BSc.)
              </h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>

            {/* teams item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-right testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Multi-award-winning Economic Justice and Health Equity Expert,
                Thought Leader, Social Entrepreneur, Founder and Board Member of
                KMS ETH Health Trading S.C
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={meseret} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Meseret Haileyesus (BSc., BA, MPH, RA)
              </h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>

            {/* teams item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-right testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Founder, Chief Executive Officer (CEO) and Board Member of KMS
                ETH Health Trading S.C
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={sisay} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Sisay Abebe (BSc., MD)
              </h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>

            {/* teams item */}
            <div className="testimonial-item item">
              <i className="fa fa-quote-right testimonial-icon gradient-text1"></i>
              <p className="mb-4">
                Engineer in the UK Defence Elections Company, Mental Health
                Awareness Campaigner in Ethiopia and the UK, Founder and Board
                V/chair of KMS ETH Health Trading S.C
              </p>

              {/* Image */}
              <div className="testimonial-image">
                <img src={wondmu} alt="image" />
              </div>
              <h5 className="font-weight-500 main-font drk-blu">
                Wondimu Negash ( BSc.)
              </h5>
              <span className="destination main-font">Newyork, USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
