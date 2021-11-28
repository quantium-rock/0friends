import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import styled from 'styled-components';

const PurpleCount = styled.div`
  span {
    color: purple;
  }
`;

// Random component
const Finished = () => (
  <span style={{ color: 'blue' }}>You are good to go!</span>
);

// Renderer callback
const renderer = ({ total, hours, minutes, seconds }) => {
  if (total) {
    // Render a countdown
    return (
      <span style={{ color: 'red' }}>
        {hours}:{minutes}:{seconds}
      </span>
    );
  } else {
    // Render a finished state
    return <Finished />;
  }
};