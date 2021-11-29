import "./CardComponent.css";
import RarityLevel from "./RarityLevel";
import { Image, Name, Habitat, Skin, Outfit, iconHabitat, iconSkin, iconOutfit } from "./CardContents";

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
                    <div className="rarity-container">                           
                        <span className="rarity-text">HABITAT: </span>
                        <img src={iconHabitat} alt="habitatIcon" className="rarity-image" />
                        <span className="rarity-text">{Habitat}</span>
                    </div>
                    <div className="rarity-container">  
                        <span className="rarity-text">SKIN: </span>
                        <img src={iconSkin} alt="author" className="rarity-image" />
                        <span className="rarity-text">{Skin}</span>
                    </div>
                    <div className="rarity-container">  
                        <div className="rarity-text">OUTFIT: </div>
                        <img src={iconOutfit} alt="author" className="rarity-image" />
                        <span className="rarity-text">{Outfit}</span>
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
