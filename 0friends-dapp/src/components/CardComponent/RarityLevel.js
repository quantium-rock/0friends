import React from "react";

const ProgressBar = (props) => {

    const { bgcolor = 'red', completed = '60' } = props;
  
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
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
};
  
export default ProgressBar;
