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
import {social_images} from "../../link_JSON"
import {commenters} from "../../link_JSON"
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
import social_icons from "../../images/social-icons.png"
import naqsh from "../../images/Quote.png"
import smiling_girl from "../../images/smiling-girl-doctor.png"
import back_img from "../../images/back_img.png"




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#40A3F8", borderRadius: "5px", width: "40px", height: "40px", padding: "10px" }}
        id="next"
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#40A3F8", borderRadius: "5px", width: "40px", height: "40px", zIndex: "2", padding: "10px" }}
        id="prev"
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
        <div className="social-media">
            <div className="social-icons" style={{"backgroundImage":`url(${social_icons})`}}></div>
            <div className="social-text">
                <h2>
                    Follow us on social media and networks.
                </h2>
                <p>
                    Get on-demand access to a doctor on your phone with the free HealthCare mobile app. Download and register on our app for free and feel safe for all your family
                </p>
                <div>
                    {
                        social_images.map(item => {
                            return(
                                <>
                                    <span style={{"backgroundImage" : `url(${item.img})`}}></span>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className="comments">
            <div className="container">
                <h2>Look our Clients have to say about us</h2>
                <div className="comment-blocks">
                    <Slider {...settings}>
                        {
                            commenters.map(item => {
                                return(
                                    <div className="block">
                                        <span className="naqsh" style={{"backgroundImage":`url(${naqsh})`}}></span>
                                        <div className="commenter-img" style={{"backgroundImage" : `url(${item.img})`}}></div>
                                        <div className="commenter-name">
                                            <span>{item.name}</span> 
                                            <svg width="70" height="13" viewBox="0 0 70 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.09 5.284C12.9407 5.44267 12.7073 5.68067 12.39 5.998L12.348 6.04C11.5173 6.852 10.892 7.45867 10.472 7.86C10.3413 7.99067 10.2433 8.09333 10.178 8.168C10.1407 8.20533 10.122 8.26133 10.122 8.336L10.836 12.48V12.508C10.8267 12.5173 10.78 12.4987 10.696 12.452C10.528 12.368 10.2853 12.242 9.968 12.074L7.07 10.548C7.00467 10.5107 6.93467 10.5153 6.86 10.562L5.432 11.318C4.46133 11.8313 3.72867 12.214 3.234 12.466C3.21533 12.4847 3.19667 12.494 3.178 12.494C3.13133 12.5127 3.11733 12.4753 3.136 12.382L3.29 11.416C3.53267 10.0347 3.71 8.99867 3.822 8.308C3.83133 8.28933 3.82667 8.266 3.808 8.238C3.79867 8.20067 3.78467 8.17267 3.766 8.154L3.29 7.692C2.66467 7.08533 2.198 6.62333 1.89 6.306C1.60067 6.026 1.274 5.68067 0.91 5.27C0.882 5.242 0.872667 5.21867 0.882 5.2C0.891333 5.172 0.914667 5.15333 0.952 5.144L4.312 4.654C4.57333 4.60733 4.76933 4.57933 4.9 4.57C4.956 4.56067 4.998 4.54667 5.026 4.528C5.054 4.50933 5.082 4.472 5.11 4.416C5.894 2.81067 6.48667 1.60667 6.888 0.803999L6.93 0.733999C6.93933 0.715333 6.95333 0.706 6.972 0.706C6.99067 0.696666 7.00467 0.701333 7.014 0.719999C7.03267 0.738666 7.042 0.757333 7.042 0.776L8.848 4.43C8.88533 4.514 8.95067 4.56067 9.044 4.57L13.048 5.158C13.0853 5.158 13.1087 5.172 13.118 5.2C13.1273 5.21867 13.118 5.24667 13.09 5.284ZM27.09 5.284C26.9407 5.44267 26.7073 5.68067 26.39 5.998L26.348 6.04C25.5173 6.852 24.892 7.45867 24.472 7.86C24.3413 7.99067 24.2433 8.09333 24.178 8.168C24.1407 8.20533 24.122 8.26133 24.122 8.336L24.836 12.48V12.508C24.8267 12.5173 24.78 12.4987 24.696 12.452C24.528 12.368 24.2853 12.242 23.968 12.074L21.07 10.548C21.0047 10.5107 20.9347 10.5153 20.86 10.562L19.432 11.318C18.4613 11.8313 17.7287 12.214 17.234 12.466C17.2153 12.4847 17.1967 12.494 17.178 12.494C17.1313 12.5127 17.1173 12.4753 17.136 12.382L17.29 11.416C17.5327 10.0347 17.71 8.99867 17.822 8.308C17.8313 8.28933 17.8267 8.266 17.808 8.238C17.7987 8.20067 17.7847 8.17267 17.766 8.154L17.29 7.692C16.6647 7.08533 16.198 6.62333 15.89 6.306C15.6007 6.026 15.274 5.68067 14.91 5.27C14.882 5.242 14.8727 5.21867 14.882 5.2C14.8913 5.172 14.9147 5.15333 14.952 5.144L18.312 4.654C18.5733 4.60733 18.7693 4.57933 18.9 4.57C18.956 4.56067 18.998 4.54667 19.026 4.528C19.054 4.50933 19.082 4.472 19.11 4.416C19.894 2.81067 20.4867 1.60667 20.888 0.803999L20.93 0.733999C20.9393 0.715333 20.9533 0.706 20.972 0.706C20.9907 0.696666 21.0047 0.701333 21.014 0.719999C21.0327 0.738666 21.042 0.757333 21.042 0.776L22.848 4.43C22.8853 4.514 22.9507 4.56067 23.044 4.57L27.048 5.158C27.0853 5.158 27.1087 5.172 27.118 5.2C27.1273 5.21867 27.118 5.24667 27.09 5.284ZM41.09 5.284C40.9407 5.44267 40.7073 5.68067 40.39 5.998L40.348 6.04C39.5173 6.852 38.892 7.45867 38.472 7.86C38.3413 7.99067 38.2433 8.09333 38.178 8.168C38.1407 8.20533 38.122 8.26133 38.122 8.336L38.836 12.48V12.508C38.8267 12.5173 38.78 12.4987 38.696 12.452C38.528 12.368 38.2853 12.242 37.968 12.074L35.07 10.548C35.0047 10.5107 34.9347 10.5153 34.86 10.562L33.432 11.318C32.4613 11.8313 31.7287 12.214 31.234 12.466C31.2153 12.4847 31.1967 12.494 31.178 12.494C31.1313 12.5127 31.1173 12.4753 31.136 12.382L31.29 11.416C31.5327 10.0347 31.71 8.99867 31.822 8.308C31.8313 8.28933 31.8267 8.266 31.808 8.238C31.7987 8.20067 31.7847 8.17267 31.766 8.154L31.29 7.692C30.6647 7.08533 30.198 6.62333 29.89 6.306C29.6007 6.026 29.274 5.68067 28.91 5.27C28.882 5.242 28.8727 5.21867 28.882 5.2C28.8913 5.172 28.9147 5.15333 28.952 5.144L32.312 4.654C32.5733 4.60733 32.7693 4.57933 32.9 4.57C32.956 4.56067 32.998 4.54667 33.026 4.528C33.054 4.50933 33.082 4.472 33.11 4.416C33.894 2.81067 34.4867 1.60667 34.888 0.803999L34.93 0.733999C34.9393 0.715333 34.9533 0.706 34.972 0.706C34.9907 0.696666 35.0047 0.701333 35.014 0.719999C35.0327 0.738666 35.042 0.757333 35.042 0.776L36.848 4.43C36.8853 4.514 36.9507 4.56067 37.044 4.57L41.048 5.158C41.0853 5.158 41.1087 5.172 41.118 5.2C41.1273 5.21867 41.118 5.24667 41.09 5.284ZM55.09 5.284C54.9407 5.44267 54.7073 5.68067 54.39 5.998L54.348 6.04C53.5173 6.852 52.892 7.45867 52.472 7.86C52.3413 7.99067 52.2433 8.09333 52.178 8.168C52.1407 8.20533 52.122 8.26133 52.122 8.336L52.836 12.48V12.508C52.8267 12.5173 52.78 12.4987 52.696 12.452C52.528 12.368 52.2853 12.242 51.968 12.074L49.07 10.548C49.0047 10.5107 48.9347 10.5153 48.86 10.562L47.432 11.318C46.4613 11.8313 45.7287 12.214 45.234 12.466C45.2153 12.4847 45.1967 12.494 45.178 12.494C45.1313 12.5127 45.1173 12.4753 45.136 12.382L45.29 11.416C45.5327 10.0347 45.71 8.99867 45.822 8.308C45.8313 8.28933 45.8267 8.266 45.808 8.238C45.7987 8.20067 45.7847 8.17267 45.766 8.154L45.29 7.692C44.6647 7.08533 44.198 6.62333 43.89 6.306C43.6007 6.026 43.274 5.68067 42.91 5.27C42.882 5.242 42.8727 5.21867 42.882 5.2C42.8913 5.172 42.9147 5.15333 42.952 5.144L46.312 4.654C46.5733 4.60733 46.7693 4.57933 46.9 4.57C46.956 4.56067 46.998 4.54667 47.026 4.528C47.054 4.50933 47.082 4.472 47.11 4.416C47.894 2.81067 48.4867 1.60667 48.888 0.803999L48.93 0.733999C48.9393 0.715333 48.9533 0.706 48.972 0.706C48.9907 0.696666 49.0047 0.701333 49.014 0.719999C49.0327 0.738666 49.042 0.757333 49.042 0.776L50.848 4.43C50.8853 4.514 50.9507 4.56067 51.044 4.57L55.048 5.158C55.0853 5.158 55.1087 5.172 55.118 5.2C55.1273 5.21867 55.118 5.24667 55.09 5.284ZM69.09 5.284C68.9407 5.44267 68.7073 5.68067 68.39 5.998L68.348 6.04C67.5173 6.852 66.892 7.45867 66.472 7.86C66.3413 7.99067 66.2433 8.09333 66.178 8.168C66.1407 8.20533 66.122 8.26133 66.122 8.336L66.836 12.48V12.508C66.8267 12.5173 66.78 12.4987 66.696 12.452C66.528 12.368 66.2853 12.242 65.968 12.074L63.07 10.548C63.0047 10.5107 62.9347 10.5153 62.86 10.562L61.432 11.318C60.4613 11.8313 59.7287 12.214 59.234 12.466C59.2153 12.4847 59.1967 12.494 59.178 12.494C59.1313 12.5127 59.1173 12.4753 59.136 12.382L59.29 11.416C59.5327 10.0347 59.71 8.99867 59.822 8.308C59.8313 8.28933 59.8267 8.266 59.808 8.238C59.7987 8.20067 59.7847 8.17267 59.766 8.154L59.29 7.692C58.6647 7.08533 58.198 6.62333 57.89 6.306C57.6007 6.026 57.274 5.68067 56.91 5.27C56.882 5.242 56.8727 5.21867 56.882 5.2C56.8913 5.172 56.9147 5.15333 56.952 5.144L60.312 4.654C60.5733 4.60733 60.7693 4.57933 60.9 4.57C60.956 4.56067 60.998 4.54667 61.026 4.528C61.054 4.50933 61.082 4.472 61.11 4.416C61.894 2.81067 62.4867 1.60667 62.888 0.803999L62.93 0.733999C62.9393 0.715333 62.9533 0.706 62.972 0.706C62.9907 0.696666 63.0047 0.701333 63.014 0.719999C63.0327 0.738666 63.042 0.757333 63.042 0.776L64.848 4.43C64.8853 4.514 64.9507 4.56067 65.044 4.57L69.048 5.158C69.0853 5.158 69.1087 5.172 69.118 5.2C69.1273 5.21867 69.118 5.24667 69.09 5.284Z" fill="#FF9000"/>
                                            </svg>      
                                        </div>
                                        <span className="address">{item.address}</span>
                                        <p>
                                           {item.comment}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            
        </div>
        <div className="banner">
            <div className="container">
                <div className="box">
                    <div className="text">
                        <h2> It's Time Change Your Life Today </h2>
                        <span>Contact Now</span>
                    </div>
                    <div className="img-girl" style={{"backgroundImage" : `url(${smiling_girl})`}}></div>
                    <div className="back_img" style={{"backgroundImage" : `url(${back_img})`}}></div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="container">
                <div className="footer-1">
                    <div className="logo">DreamDental.</div>
                    <p>Metairie, 3689  Bassel Street, LA, Louisiana</p>
                    <p>Contact us: 225-788-5489</p>
                    <div className="social-icons">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.39209C7.16344 0.39209 0 7.55553 0 16.3921C0 25.2286 7.16344 32.3921 16 32.3921C24.8366 32.3921 32 25.2286 32 16.3921C32 7.55553 24.8366 0.39209 16 0.39209ZM22.6679 10.8924C23.4022 11.0939 23.9805 11.6877 24.1768 12.4417C24.5335 13.8082 24.5335 16.6595 24.5335 16.6595C24.5335 16.6595 24.5335 19.5107 24.1768 20.8774C23.9805 21.6314 23.4022 22.2251 22.6679 22.4268C21.3371 22.7929 16.0001 22.7929 16.0001 22.7929C16.0001 22.7929 10.6632 22.7929 9.3323 22.4268C8.59795 22.2251 8.01962 21.6314 7.82335 20.8774C7.4668 19.5107 7.4668 16.6595 7.4668 16.6595C7.4668 16.6595 7.4668 13.8082 7.82335 12.4417C8.01962 11.6877 8.59795 11.0939 9.3323 10.8924C10.6632 10.5262 16.0001 10.5262 16.0001 10.5262C16.0001 10.5262 21.3371 10.5262 22.6679 10.8924Z" fill="#646464"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3999 19.5914V14.2581L18.6666 16.9248L14.3999 19.5914Z" fill="#646464"/>
                        </svg>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.39209C7.16344 0.39209 0 7.55553 0 16.3921C0 25.2286 7.16344 32.3921 16 32.3921C24.8366 32.3921 32 25.2286 32 16.3921C32 7.55553 24.8366 0.39209 16 0.39209ZM15.5544 13.9503L15.5208 13.3967C15.4201 11.9618 16.3042 10.6511 17.7032 10.1427C18.218 9.9619 19.091 9.9393 19.6617 10.0975C19.8856 10.1653 20.3108 10.3912 20.613 10.5946L21.1614 10.9675L21.7658 10.7754C22.1015 10.6737 22.5492 10.5042 22.7506 10.3912C22.9409 10.2896 23.1088 10.2331 23.1088 10.267C23.1088 10.459 22.6947 11.1144 22.3477 11.4759C21.8777 11.9844 22.012 12.0296 22.9633 11.6906C23.534 11.4985 23.5452 11.4985 23.4333 11.7132C23.3662 11.8262 23.0192 12.2216 22.6499 12.5832C22.0232 13.2046 21.9896 13.2724 21.9896 13.7922C21.9896 14.5944 21.6091 16.2666 21.2286 17.1818C20.5235 18.8992 19.0126 20.6731 17.5017 21.5657C15.3753 22.8198 12.5438 23.1362 10.16 22.4018C9.36539 22.1532 8.00001 21.5205 8.00001 21.4075C8.00001 21.3736 8.4141 21.3284 8.91773 21.3171C9.96974 21.2945 11.0218 21.0007 11.9171 20.481L12.5214 20.1194L11.8276 19.8822C10.8427 19.5432 9.95855 18.7636 9.73472 18.0292C9.66757 17.7919 9.68995 17.7806 10.3167 17.7806L10.9658 17.7693L10.4174 17.5094C9.76829 17.1818 9.17514 16.6281 8.88415 16.0632C8.67151 15.6564 8.40291 14.6283 8.48125 14.5492C8.50364 14.5153 8.73866 14.5831 9.00726 14.6735C9.77949 14.9559 9.88021 14.8881 9.43254 14.4136C8.59317 13.5549 8.33576 12.2781 8.73866 11.0692L8.92892 10.5268L9.66757 11.2612C11.1784 12.7414 12.9579 13.6227 14.9948 13.8825L15.5544 13.9503Z" fill="#646464"/>
                        </svg>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.39209C7.16344 0.39209 0 7.55553 0 16.3921C0 25.2286 7.16344 32.3921 16 32.3921C24.8366 32.3921 32 25.2286 32 16.3921C32 7.55553 24.8366 0.39209 16 0.39209ZM12.4823 7.91044C13.3925 7.86902 13.6834 7.85889 16.0009 7.85889H15.9983C18.3165 7.85889 18.6063 7.86902 19.5165 7.91044C20.425 7.95204 21.0454 8.09587 21.5894 8.30689C22.1512 8.52467 22.6259 8.81623 23.1005 9.2909C23.5752 9.76522 23.8668 10.2413 24.0854 10.8026C24.2952 11.3451 24.4392 11.9652 24.4819 12.8737C24.5228 13.7839 24.5335 14.0748 24.5335 16.3923C24.5335 18.7098 24.5228 19 24.4819 19.9102C24.4392 20.8183 24.2952 21.4386 24.0854 21.9813C23.8668 22.5424 23.5752 23.0185 23.1005 23.4928C22.6264 23.9675 22.151 24.2598 21.59 24.4777C21.047 24.6887 20.4262 24.8326 19.5178 24.8742C18.6075 24.9156 18.3176 24.9257 15.9999 24.9257C13.6825 24.9257 13.3918 24.9156 12.4816 24.8742C11.5733 24.8326 10.953 24.6887 10.4101 24.4777C9.84921 24.2598 9.37312 23.9675 8.89898 23.4928C8.42449 23.0185 8.13293 22.5424 7.91479 21.9812C7.70394 21.4386 7.56012 20.8185 7.51834 19.91C7.4771 18.9998 7.46679 18.7098 7.46679 16.3923C7.46679 14.0748 7.47745 13.7837 7.51817 12.8735C7.55905 11.9654 7.70306 11.3451 7.91461 10.8024C8.13328 10.2413 8.42484 9.76522 8.89951 9.2909C9.37383 8.81641 9.84992 8.52485 10.4112 8.30689C10.9538 8.09587 11.5739 7.95204 12.4823 7.91044Z" fill="#646464"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2355 9.39618C15.3841 9.39594 15.544 9.39602 15.7166 9.39609L16.001 9.39618C18.2794 9.39618 18.5495 9.40435 19.4492 9.44524C20.2812 9.48329 20.7328 9.62231 21.0336 9.73911C21.4318 9.89378 21.7157 10.0787 22.0142 10.3773C22.3129 10.676 22.4978 10.9605 22.6528 11.3587C22.7696 11.6591 22.9088 12.1107 22.9467 12.9427C22.9876 13.8423 22.9964 14.1125 22.9964 16.3898C22.9964 18.6672 22.9876 18.9374 22.9467 19.837C22.9086 20.669 22.7696 21.1206 22.6528 21.421C22.4981 21.8192 22.3129 22.1028 22.0142 22.4013C21.7155 22.7 21.432 22.8848 21.0336 23.0395C20.7331 23.1569 20.2812 23.2955 19.4492 23.3336C18.5496 23.3745 18.2794 23.3833 16.001 23.3833C13.7224 23.3833 13.4524 23.3745 12.5528 23.3336C11.7208 23.2952 11.2692 23.1561 10.9682 23.0393C10.57 22.8847 10.2856 22.6998 9.98689 22.4011C9.68822 22.1024 9.50333 21.8187 9.34831 21.4203C9.23151 21.1199 9.09231 20.6683 9.05444 19.8363C9.01355 18.9367 9.00537 18.6665 9.00537 16.3877C9.00537 14.1089 9.01355 13.8401 9.05444 12.9406C9.09248 12.1086 9.23151 11.657 9.34831 11.3562C9.50298 10.958 9.68822 10.6735 9.98689 10.3749C10.2856 10.0762 10.57 9.89129 10.9682 9.73627C11.269 9.61893 11.7208 9.48027 12.5528 9.44204C13.34 9.40649 13.6451 9.39582 15.2355 9.39404V9.39618ZM20.5559 10.813C19.9906 10.813 19.5319 11.2712 19.5319 11.8367C19.5319 12.402 19.9906 12.8607 20.5559 12.8607C21.1212 12.8607 21.5799 12.402 21.5799 11.8367C21.5799 11.2713 21.1212 10.8127 20.5559 10.8127V10.813ZM11.6188 16.3909C11.6188 13.9708 13.5809 12.0087 16.0009 12.0086C18.421 12.0086 20.3826 13.9708 20.3826 16.3909C20.3826 18.811 18.4212 20.7723 16.0011 20.7723C13.581 20.7723 11.6188 18.811 11.6188 16.3909Z" fill="#646464"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0007 13.5471C17.5716 13.5471 18.8452 14.8206 18.8452 16.3916C18.8452 17.9625 17.5716 19.2361 16.0007 19.2361C14.4297 19.2361 13.1562 17.9625 13.1562 16.3916C13.1562 14.8206 14.4297 13.5471 16.0007 13.5471V13.5471Z" fill="#646464"/>
                        </svg>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.39209C7.16344 0.39209 0 7.55553 0 16.3921C0 25.2286 7.16344 32.3921 16 32.3921C24.8366 32.3921 32 25.2286 32 16.3921C32 7.55553 24.8366 0.39209 16 0.39209ZM17.6676 17.0949V25.7997H14.066V17.0952H12.2666V14.0955H14.066V12.2945C14.066 9.84729 15.082 8.39209 17.9687 8.39209H20.372V11.3922H18.8698C17.7461 11.3922 17.6717 11.8114 17.6717 12.5938L17.6676 14.0952H20.389L20.0706 17.0949H17.6676Z" fill="#646464"/>
                        </svg>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="category">
                        <span>Category</span>
                        <span>Home</span>
                        <span>About</span>
                        <span>Services</span>
                        <span>Reviews</span>
                        <span>Article</span>
                    </div>
                    <div className="category">
                        <span>About</span>
                        <span>Partners</span>
                        <span>Careers</span>
                        <span>Press</span>
                        <span>Community</span>
                    </div>
                </div>
                <div className="footer-3">
                    <b>Subscribe newsletter</b>
                    <p> Sign up for tips, new destinations, and exclusive promos.</p>
                </div>
            </div>
        </div>
        <div className="the_end">
            <div className="container">
                <div>© 2022 DreamDental - All rights reserved.</div>
                <div>
                    <div>Privacy</div>
                    <div>Security</div>
                    <div>Terms</div>
                </div>
            </div>
        </div>
        </>
    )
}