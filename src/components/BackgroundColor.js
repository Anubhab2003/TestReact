import React, { useState } from 'react';

export default function BackgroundColor() {
  const [color, setColor] = useState('white');

  const handleBlueClick = () => {
    setColor('blue');
    document.body.style.backgroundColor = 'blue';
  };

  const handleRedClick = () => {
    setColor('red');
    document.body.style.backgroundColor = 'red';
  };

  const handleYellowClick = () => {
    setColor('yellow');
    document.body.style.backgroundColor = 'yellow';
  };

  return (
    <div className="container flex justify-center" style={{ backgroundColor: color }}>
      <button type="button" className="btn btn-primary mx-2" onClick={handleBlueClick}>Blue</button>
      <button type="button" className="btn btn-danger mx-2" onClick={handleRedClick}>Red</button>
      <button type="button" className="btn btn-warning mx-2" onClick={handleYellowClick}>Yellow</button>
    </div>
  );
}
