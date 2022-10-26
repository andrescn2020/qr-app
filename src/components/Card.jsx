import QR from "../images/image-qr-code.png";
import "./Card.css";

const Card = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="image-container">
                    <img className="qr-image" src={QR} alt="QR CODE FEM" />
                </div>
                <div className="title-container">
                    <h1 className="title-first-line">Improve your front-end </h1>
                    <h1 className="title-second-line">skills by building projects</h1>
                </div>
                <div className="text-container">
                    <p className="text-one">Scan the QR code to visit Frontend</p>
                    <p className="text-two">Mentor and take your coding skills to</p>
                    <p className="text-three">the next level</p>
                </div>
            </div>
        </div>
    )
}

export default Card;