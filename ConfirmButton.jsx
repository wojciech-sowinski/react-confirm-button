import React, { useState, useEffect} from 'react';

const ConfirmButton = ({ text, confirmText, timeout, onConfirm, barColor }) => {
  const [showBar, setShowBar] = useState(false);
  const [buttonText, setButonText] = useState(text);
  const [barWidth, setBarWidth] = useState(120);
  const [timeouts, setTimeouts] = useState([]);

  const onClickHandle = (e) => {
    if (!showBar) {
      setShowBar(true);
      setButonText(confirmText);

      const barWidthTimeout = setTimeout(() => {
        setBarWidth(-20);
      }, 100);

      const showBarTimeout = setTimeout(() => {
        setShowBar(false);
        setButonText(text);
        setBarWidth(120);
      }, timeout * 1000);

      setTimeouts((prev) => [...prev, barWidthTimeout, showBarTimeout]);
      
    } else {
      setShowBar(false);
      setButonText(text);
      setBarWidth(120);
      clearTimeouts();
      onConfirm();
    }
  };

  const clearTimeouts = () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
    setTimeouts([]);
  };

  const barStyle = {
    position: 'absolute',
    bottom: 0,
    left: barWidth + '%',
    width: '120%',
    height: '100%',
    backgroundColor: barColor,
    transition: timeout + 's linear',
  };

  const buttonStyle = {
    position: 'relative',
    overflow: 'hidden',
  };

  const textDivStyle = {
    position: 'relative',
  };

  useEffect(() => {
    return () => {
      clearTimeouts();
    };
  }, []);

  return (
    <button style={buttonStyle} onClick={onClickHandle}>
      {showBar && <div style={barStyle}></div>}
      <div style={textDivStyle}>
        <span>{buttonText}</span>
      </div>
    </button>
  );
};

export default ConfirmButton;
