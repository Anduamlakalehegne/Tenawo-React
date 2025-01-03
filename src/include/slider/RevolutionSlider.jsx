import React from "react";
import logo from "../../assets/img/Header2.jpg";

export default function RevolutionSlider() {
  return (
    <section className="position-relative p-0 no-transition" id="home">
      <h2 className="d-none">as</h2>
      <div
        id="rev_slider_18_1_wrapper"
        className="rev_slider_wrapper fullscreen-container"
        data-alias="megaone-medical-1"
        data-source="gallery"
        style={{ background: "transparent", padding: "0px" }}
      >
        {/* START REVOLUTION SLIDER 5.4.8.1 fullscreen mode */}
        <div
          id="rev_slider_18_1"
          className="rev_slider fullscreenbanner"
          style={{ display: "none" }}
          data-version="5.4.8.1"
        >
          <ul>
            {/* SLIDE */}
            <li
              data-index="rs-44"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="300"
              data-thumb="assets/100x50_3d469-bg-light-1.jpg"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Slide"
              data-param1=""
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src={logo}
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-no-retina
              />
              <div className="small-bg-overlay"></div>
              {/* LAYERS */}

              {/* LAYER NR. 1 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-44-layer-2"
                data-x="['left','left','center','center']"
                data-hoffset="['0','100','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-120','-120','-120','-96']"
                data-fontsize="['36','36','28','23']"
                data-lineheight="['46','46','38','33']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":270,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['inherit','inherit','inherit','inherit']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "5",
                  whiteSpace: "nowrap",
                  fontSize: "36px",
                  lineHeight: "46px",
                  fontWeight: "500",
                  color: "#484b59",
                  letterSpacing: "0px",
                  fontFamily: "Poppins",
                }}
              >
                We care for your
              </div>

              {/* LAYER NR. 2 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-44-layer-1"
                data-x="['left','left','center','center']"
                data-hoffset="['0','100','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-55','-55','-55','-40']"
                data-fontsize="['72','72','62','45']"
                data-lineheight="['82','82','72','55']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1080,"split":"chars","splitdelay":0.1,"speed":1500,"split_direction":"forward","frame":"0","from":"sX:0.8;sY:0.8;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['inherit','inherit','inherit','inherit']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "6",
                  whiteSpace: "nowrap",
                  fontSize: "72px",
                  lineHeight: "82px",
                  fontWeight: "500",
                  color: "#484b59",
                  letterSpacing: "0px",
                  fontFamily: "Poppins",
                }}
              >
                <span className="drk-blu">Medical</span>
                <span className="light-blu">Health</span>
              </div>

              {/* LAYER NR. 3 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-44-layer-3"
                data-x="['left','left','center','center']"
                data-hoffset="['0','100','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['40','53','53','60']"
                data-width="['600','600','600','450']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2400,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['inherit','inherit','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "7",
                  minWidth: "600px",
                  maxWidth: "600px",
                  whiteSpace: "normal",
                  fontSize: "16px",
                  lineHeight: "26px",
                  fontWeight: "400",
                  color: "#797979",
                  letterSpacing: "0px",
                  fontFamily: "Roboto",
                }}
              >
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit.
              </div>

              {/* LAYER NR. 4 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-44-layer-4"
                data-x="['left','left','center','center']"
                data-hoffset="['0','100','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['138','138','138','180']"
                data-width="['600','600','600','450']"
                data-height="none"
                data-whitespace="normal"
                data-type="button"
                data-responsive_offset="on"
                data-frames='[{"delay":3350,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['inherit','inherit','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: "8", fontFamily: "Roboto" }}
              >
                <a href="#" className="btn btn-rounded btn-large btn-blue">
                  Learn More
                </a>
              </div>
            </li>
            {/* SLIDE */}
            <li
              data-index="rs-45"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="300"
              data-thumb="assets/100x50_3d469-bg-light-1.jpg"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Slide"
              data-param1=""
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src={logo}
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-no-retina
              />

              {/* LAYERS */}

              {/* LAYER NR. 5 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-45-layer-2"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-120','-120','-120','-96']"
                data-fontsize="['36','36','28','23']"
                data-lineheight="['46','46','38','33']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":270,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['inherit','inherit','inherit','inherit']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "5",
                  whiteSpace: "nowrap",
                  fontSize: "36px",
                  lineHeight: "46px",
                  fontWeight: "500",
                  color: "#484b59",
                  letterSpacing: "0px",
                  fontFamily: "Poppins",
                }}
              >
                We care for your
              </div>

              {/* LAYER NR. 6 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-45-layer-1"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-55','-55','-55','-40']"
                data-fontsize="['72','72','62','45']"
                data-lineheight="['82','82','72','55']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1080,"split":"chars","splitdelay":0.1,"speed":1500,"split_direction":"forward","frame":"0","from":"sX:0.8;sY:0.8;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['inherit','inherit','inherit','inherit']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "6",
                  whiteSpace: "nowrap",
                  fontSize: "72px",
                  lineHeight: "82px",
                  fontWeight: "500",
                  color: "#484b59",
                  letterSpacing: "0px",
                  fontFamily: "Poppins",
                }}
              >
                <span className="drk-blu">Medical</span>
                <span className="light-blu">Health</span>
              </div>

              {/* LAYER NR. 7 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-45-layer-3"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['40','53','53','60']"
                data-width="['600','600','600','450']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2400,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "7",
                  minWidth: "600px",
                  maxWidth: "600px",
                  whiteSpace: "normal",
                  fontSize: "16px",
                  lineHeight: "26px",
                  fontWeight: "400",
                  color: "#797979",
                  letterSpacing: "0px",
                  fontFamily: "Roboto",
                }}
              >
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit.
              </div>

              {/* LAYER NR. 8 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-45-layer-4"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['138','138','138','180']"
                data-width="['600','600','600','450']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":3350,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: "8", fontFamily: "Roboto" }}
              >
                <a href="#" className="btn btn-rounded btn-large btn-blue">
                  Learn More
                </a>
              </div>
            </li>
            {/* SLIDE */}
            <li
              data-index="rs-46"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="300"
              data-thumb="assets/100x50_3d469-bg-light-1.jpg"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Slide"
              data-param1=""
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src={logo}
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-no-retina
              />
              <div className="small-bg-overlay"></div>
              {/* LAYERS */}

              {/* LAYER NR. 9 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-46-layer-2"
                data-x="['right','right','center','center']"
                data-hoffset="['0','100','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-120','-120','-120','-96']"
                data-fontsize="['36','36','28','23']"
                data-lineheight="['46','46','38','33']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":270,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['right','right','inherit','inherit']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "5",
                  whiteSpace: "nowrap",
                  fontSize: "36px",
                  lineHeight: "46px",
                  fontWeight: "500",
                  color: "#484b59",
                  letterSpacing: "0px",
                  fontFamily: "Poppins",
                }}
              >
                We care for your
              </div>

              {/* LAYER NR. 10 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-46-layer-1"
                data-x="['right','right','center','center']"
                data-hoffset="['0','100','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-55','-55','-55','-50']"
                data-fontsize="['72','72','62','45']"
                data-lineheight="['82','82','72','55']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1080,"split":"chars","splitdelay":0.1,"speed":1500,"split_direction":"forward","frame":"0","from":"sX:0.8;sY:0.8;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['right','right','inherit','inherit']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "6",
                  whiteSpace: "nowrap",
                  fontSize: "72px",
                  lineHeight: "82px",
                  fontWeight: "500",
                  color: "#484b59",
                  letterSpacing: "0px",
                  fontFamily: "Poppins",
                }}
              >
                <span className="drk-blu">Medical</span>
                <span className="light-blu">Health</span>
              </div>

              {/* LAYER NR. 11 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-46-layer-3"
                data-x="['right','right','center','center']"
                data-hoffset="['0','100','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['40','53','53','53']"
                data-width="['600','600','600','450']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2400,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['right','right','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "7",
                  minWidth: "600px",
                  maxWidth: "600px",
                  whiteSpace: "normal",
                  fontSize: "16px",
                  lineHeight: "26px",
                  fontWeight: "400",
                  color: "#797979",
                  letterSpacing: "0px",
                  fontFamily: "Roboto",
                }}
              >
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit.
              </div>

              {/* LAYER NR. 12 */}
              <div
                className="tp-caption tp-resizeme"
                id="slide-46-layer-4"
                data-x="['right','right','center','center']"
                data-hoffset="['0','100','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['138','138','138','160']"
                data-width="['600','600','600','450']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":3350,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-textalign="['right','right','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: "8", fontFamily: "Roboto" }}
              >
                <a href="#" className="btn btn-rounded btn-large btn-blue">
                  Learn More
                </a>
              </div>
            </li>
          </ul>
          <div
            className="tp-bannertimer tp-bottom"
            style={{ visibility: "hidden !important" }}
          ></div>
        </div>
      </div>

      {/* END REVOLUTION SLIDER */}

      <ul className="social-icons-simple revicon darkcolor">
        <li className="d-table">
          <a className="facebook-text-hvr" href="javascript:void(0)">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="d-table">
          <a className="twitter-text-hvr" href=" javascript:void(0)">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="d-table">
          <a className="linkedin-text-hvr" href="javascript:void(0)">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="d-table">
          <a className="instagram-text-hvr" href="javascript:void(0)">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      {/* END REVOLUTION SLIDER */}
    </section>
  );
}
