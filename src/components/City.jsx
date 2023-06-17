import React from 'react';

const City = ({ onSetLocation, currentCity }) => {
  const [inputValue, setInputValue] = React.useState('');

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const onSetLocationClick = () => {
    console.log(inputValue);
    onSetLocation(inputValue);
  };

  return (
    // <div className="current-city">
    //   <h3>Type your current city</h3>
    //   <input placeholder="City..." value={inputValue} onChange={onChangeInput} />
    //   <button onClick={onSetLocationClick}>Set location</button>
    // </div>
    <div className="location-info">
      <h1>Select your city</h1>
      <input placeholder="City..." value={inputValue} onChange={onChangeInput} />
      <button onClick={onSetLocationClick}>Select</button>
      <span>{currentCity.charAt(0).toUpperCase() + currentCity.slice(1)}</span>
      <div className="recomendations"></div>
    </div>
  );
};

export default City;
