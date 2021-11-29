import React from "react";
import rarityLevel from "./CardContents";

const ProgressBar = (props) => {

    const { bgcolor = 'purple', completed = rarityLevel } = props;
  
    const containerStyles = {
      height: 12,
  
      backgroundColor: "grey",
      borderRadius: 50,
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
      
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}% Rarity`}</span>
        </div>
      </div>
    );
};
  
export default ProgressBar;
