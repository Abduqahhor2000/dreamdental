import "../scss/home.scss"
import {FcPhoneAndroid, FcCellPhone, FcApproval} from "react-icons/fc"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {therapy} from "../../link_JSON"
import {periodontology} from "../../link_JSON"
import {surgery} from "../../link_JSON"
import {prosthesis} from "../../link_JSON"
import {ourTeam} from "../../link_JSON"
import {socials} from "../../svg/socialicons";

import girl1 from "../../images/girl1.png"
import backimg1 from "../../images/backimg1.png"
import callphone from "../../images/callphone.png"
import comment from "../../images/comment.png"
import commenticon from "../../images/commenticon.png"
import patient from "../../images/patient.png"
import videocall from "../../images/videocall.png"
import aptechka from "../../images/aptechkaicon.png"
import calendar from "../../images/calendaricon.png"
import doctorimg from "../../images/doctorimg.png"
import therapyicon from "../../images/dental-care.png"





function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(64, 163, 248, 0.7)", borderRadius: "50%", width: "40px", height: "40px", right: "25px", padding: "10px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(64, 163, 248, 0.7)", borderRadius: "50%", width: "40px", height: "40px", left: "25px", zIndex: "2", padding: "10px" }}
        onClick={onClick}
      />
    );
  }
export default function Home () {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        initialSlide: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 10000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                speed: 300,
              }
            },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                speed: 200,
              }
            },
          ]
    };
  
    return(
        <>
        <div className="header">
            <div className="container btt">
                <div className="navbar">
                    <div className="logo">DreamDental.</div>
                    <div className="navs">
                        <span className="nav active">Home</span>
                        <span className="nav">About</span>
                        <span className="nav">Articles</span>
                        <span className="nav">Services</span>
                        <div className="connecting">Contact</div>
                    </div>
                </div>
                <div className="sitetitle">
                    <h1>Finding a <span>Good Doctor</span> <br/>is very Important</h1>
                    <p>
                        Join us and take care of yourself and your family with 
                        health services that <br/> will make you feel confident and 
                        safe in your daily life.
                    </p>
                    <span className="phone-icon"><FcCellPhone/><a href="tel:+998942341945"> +998 94 234 19 45</a></span>
                    <div className="bigconnecting">CONTACT NOW</div>
                </div>
                <div className="partriet">
                    <img className="part1" src={backimg1} alt=""></img>
                    <img className="part2" src={girl1} alt=""></img>
                    <img className="part3" src={callphone} alt=""></img>
                    <img className="part4" src={videocall} alt=""></img>
                    <img className="part5" src={patient} alt=""></img>
                    <img className="part6" src={comment} alt=""></img>
                    <img className="part7" src={commenticon} alt=""></img>
                </div>
            </div>
        </div>
        <div className="main-step">
            <div className="container">
                <h2>3 Easy Steps and Get Your Solution</h2>
                <div className="steps">
                    <div className="step">
                        <div><FcPhoneAndroid/></div>
                        <span>Contact a personal doctor</span>
                        <p>
                            Find your doctor easily with a minimum of effort.
                            We've kept everything organised for you.
                        </p>
                    </div>
                    <div className="step">
                        <div style={{"background-color": "rgba(240, 235, 215)"}}><img src={calendar} alt=""/></div>
                        <span>Get Appointment</span>
                        <p>
                            Ask for an appointment of the doctor quickly with 
                            almost a single click. We take care of the rest.
                        </p>
                    </div>
                    <div className="step">
                        <div><img src={aptechka} alt=""/></div>
                        <span>Happy Consultations</span>
                        <p>
                            Do consultations and  take the service based on 
                            your appointment. Get back to good health
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-doctor">
            <div className="container doctor">
                <div className="img-doctor"><img src={doctorimg} alt=""/></div>
                <div className="info-doctor">
                    <h3>Best quality service with our experience doctors</h3>
                    <p>
                        With our top doctors, we are able to provide best medical services
                        above average We have highly experienced doctors, so don't worry.
                        They are also very talented in their fields.
                    </p>
                    <span><FcApproval/> Search your specialist & Online consultations anywhere</span>
                    <span><FcApproval/> Consultation our top specialists</span>
                    <span><FcApproval/> Doctors are available 24/7</span>
    
                    <div>{`See more experience >`}</div>
                </div>
            </div>
        </div>
        <div className="main-services">
            <div className="container main-s">
                <h3>Our Service</h3>
                <span className="title-services">
                    Our online doctors have an average of 15 years experience
                    and a 98% satisfaction rating, they really set us apart!
                </span>
                <div className="type-services">
                    <div className="type">
                        <span><img src={therapyicon} alt=""/>THERAPY</span>
                        <Slider {...settings}>
                            {therapy.map(item => {

                                return(
                                    <div className="card-service">
                                        <div className="img" style={{"background-image": `url(${item.img})`}}></div>
                                        <div className="info">
                                            <h4>{item.title}</h4>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                )
                            })}     
                        </Slider>
                    </div>
                    <div className="type">
                        <span><img src={therapyicon} alt=""/>PERIODONTOLOGY</span>
                        <Slider {...settings}>
                            {periodontology.map(item => {
                                return(
                                    <div className="card-service">
                                        <div className="img" style={{"background-image": `url(${item.img})`}}></div>
                                        <div className="info">
                                            <h4>{item.title}</h4>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                )
                            })}     
                        </Slider>
                    </div>
                    <div className="type">
                        <span><img src={therapyicon} alt=""/>SURGERY</span>
                        <Slider {...settings}>
                            {surgery.map(item => {
                                return(
                                    <div className="card-service">
                                        <div className="img" style={{"background-image": `url(${item.img})`}}></div>
                                        <div className="info">
                                            <h4>{item.title}</h4>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                )
                            })}     
                        </Slider>
                    </div>
                    <div className="type">
                        <span><img src={therapyicon} alt=""/>PROSTHESIS</span>
                        <Slider {...settings}>
                            {prosthesis.map(item => {
                                return(
                                    <div className="card-service">
                                        <div className="img" style={{"background-image": `url(${item.img})`}}></div>
                                        <div className="info">
                                            <h4>{item.title}</h4>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                )
                            })}     
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        <div className="our-team">
            <h2>Our Team Doctors</h2>
            <p>Our online doctors have an average of 15 years experience and a 98% satisfaction rating, they really set us apart!</p>
            <div className="doctors">
                {
                    ourTeam.map( item => {
                        return(
                            <>
                                <div className="doctor">
                                    <div className="img" style={{"backgroundImage": `url(${item.img})`}}></div>
                                    <h4>{item.name}</h4>
                                    <p>{item.specialty}</p>
                                    {
                                        item.addresses.length <= 0  ?  null :
                                         <div> 
                                            {
                                                item.addresses.map( icon => socials[icon.type] ? socials[icon.type] : null)
                                            }
                                         </div>
                                    }
                                </div>
                            </>
                        )
                    })
                }
                
            </div>
            <span>See All Doctors</span>
        </div>
        </>
    )
}