import geodist from 'geodist';

export const calculateDistance = (track, config) => {
  let distance = 0;
  let prevPoint = null;

  track.forEach((point, index) => {
    if (index === 0) {
      prevPoint = point;
      return;
    }

    const calculatedDist = geodist(
      {lat: prevPoint.latitude, lon: prevPoint.longitude},
      {lat: point.latitude, lon: point.longitude},
      {unit: 'meters'}
    );

    distance += (isNaN(calculatedDist) ? 0 : calculatedDist);
    prevPoint = point;
  });

  if (config && config.unit && config.unit === 'km') {
    distance = Number(distance/1000).toFixed(2);
  }

  return distance;
};
