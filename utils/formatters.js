export const formatSpeed = (value) => {
  const speed = value * 3.6;

  return Math.round(speed);
}

export const formatTemperature = (_minTemp, _maxTemp) => {  
  const minTemp = _minTemp > 0 ? `+${_minTemp}` : _minTemp;
  const maxTemp = _minTemp > 0 ? `+${_maxTemp}` : _maxTemp;

  return minTemp == maxTemp ? minTemp : `${minTemp} ... ${maxTemp}`;
}