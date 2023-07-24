import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <button onClick={handleClick}>{isOn ? 'Click to OFF' : 'Click to ON'}</button>
      <p>{isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default Toggle;