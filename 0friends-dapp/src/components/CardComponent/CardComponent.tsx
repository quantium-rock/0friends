import React from 'react';
import "./CardComponent.css";
import RarityLevel from "./RarityLevel";

const collection = [
    "images/collections/cherry/0.png",
    "images/collections/cherry/1.png",
    "images/collections/cherry/2.png",
    "images/collections/cherry/3.png",
    "images/collections/cherry/4.png",
    "images/collections/cherry/5.png",
    "images/collections/cherry/6.png",
    "images/collections/cherry/7.png",
    "images/collections/cherry/8.png",
    "images/collections/cherry/9.png",
    "images/collections/cherry/10.png",
    "images/collections/cherry/11.png",
    "images/collections/cherry/12.png",
    "images/collections/cherry/13.png",
    "images/collections/cherry/14.png",
    "images/collections/cherry/15.png",
    "images/collections/cherry/16.png",
    "images/collections/cherry/17.png",
    "images/collections/cherry/18.png",
    "images/collections/cherry/19.png",
    "images/collections/cherry/20.png",
    "images/collections/cherry/21.png",
    "images/collections/cherry/22.png"
]

const name = [
    "CHERRY ",
    "images/collections/cherry/1.png",
    "images/collections/cherry/2.png",
    "images/collections/cherry/3.png",
    "images/collections/cherry/4.png",
    "images/collections/cherry/5.png",
    "images/collections/cherry/6.png",
    "images/collections/cherry/7.png",
    "images/collections/cherry/8.png",
    "images/collections/cherry/9.png",
    "images/collections/cherry/10.png",
    "images/collections/cherry/11.png",
    "images/collections/cherry/12.png",
    "images/collections/cherry/13.png",
    "images/collections/cherry/14.png",
    "images/collections/cherry/15.png",
    "images/collections/cherry/16.png",
    "images/collections/cherry/17.png",
    "images/collections/cherry/18.png",
    "images/collections/cherry/19.png",
    "images/collections/cherry/20.png",
    "images/collections/cherry/21.png",
    "images/collections/cherry/22.png"
]

function randomImage() {
    return collection[Math.floor(Math.random()*collection.length)];
}

var Img = "";

function test() {
  setInterval(function(){ var Img = randomImage() }, 3000);
}

export default function CardComponent() {
    
    function renderCards() {
        test();

        return (
            <div className="card-container box-contents">
                <div className="card-image-container">
                    <img src={randomImage()} alt="card" className="card-image" />
                </div>
                <div className="card-content">
                    <h1 className="card-title">CHERRY #3429</h1>
                    <RarityLevel/>
                    <hr className="card-separator" />
                    <div className="creator-details-container">
                        <div className="creator-details-text">
                            <span className="creator-details-first-text">HABITAT: </span>
                            <img src="images/image-avatar.png" alt="author" className="creator-image" />
                            <span className="creator-details-last-text">Snow</span>
                        </div>
                    </div>
                    <div className="creator-details-container">
                        <div className="creator-details-text">
                            <span className="creator-details-first-text">SKIN: </span>
                            <img src="images/image-avatar.png" alt="author" className="creator-image" />
                            <span className="creator-details-last-text">Leopard</span>
                        </div>
                    </div>
                    <div className="creator-details-container">
                        <div className="creator-details-text">
                            <span className="creator-details-first-text">OUTFIT: </span>
                            <img src="images/image-avatar.png" alt="author" className="creator-image" />
                            <span className="creator-details-last-text">Marley</span>
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
