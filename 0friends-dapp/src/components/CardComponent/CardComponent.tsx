
import "./CardComponent.css";
import RarityLevel from "./RarityLevel";
import { Image, Name, Habitat, Skin, Outfit } from "./CardContents";

export default function CardComponent() {
    
    function renderCards() {
        

        return (
            <div className="card-container box-contents">
                <div className="card-image-container">
                    <img src={Image} alt="card" className="card-image" />
                </div>
                <div className="card-content">
                    <h1 className="card-title">{Name}</h1>
                    <RarityLevel/>
                    <hr className="card-separator" />
                    <div className="creator-details-container">
                        <div className="creator-details-text">
                            <span className="creator-details-first-text">HABITAT: </span>
                            <img src="images/image-avatar.png" alt="author" className="creator-image" />
                            <span className="creator-details-last-text">{Habitat}</span>
                        </div>
                    </div>
                    <div className="creator-details-container">
                        <div className="creator-details-text">
                            <span className="creator-details-first-text">SKIN: </span>
                            <img src="images/image-avatar.png" alt="author" className="creator-image" />
                            <span className="creator-details-last-text">{Skin}</span>
                        </div>
                    </div>
                    <div className="creator-details-container">
                        <div className="creator-details-text">
                            <span className="creator-details-first-text">OUTFIT: </span>
                            <img src="images/image-avatar.png" alt="author" className="creator-image" />
                            <span className="creator-details-last-text">{Outfit}</span>
                        </div>
                    </div>
                    <hr className="card-separator" />

                    <div className="card-details-container">
                        <div className="details-container">
                            <img src="images/solana-sol-logo.svg" alt="currency icon" />
                            <span className="price-text">0.22 SOL</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
    return (
        <div className="card" >
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            {renderCards()}
        </div>
    )
}
