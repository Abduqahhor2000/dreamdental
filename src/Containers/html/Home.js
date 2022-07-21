import "../scss/home.scss"
import {FcPhoneAndroid} from "react-icons/fc"
import girl1 from "../../images/girl1.png"
import backimg1 from "../../images/backimg1.png"
import callphone from "../../images/callphone.png"
import comment from "../../images/comment.png"
import commenticon from "../../images/commenticon.png"
import patient from "../../images/patient.png"
import videocall from "../../images/videocall.png"

export default function Home () {
    return(
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
                    <span className="phone-icon"><FcPhoneAndroid/>+998 94 234 19 45</span>
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
    )
}