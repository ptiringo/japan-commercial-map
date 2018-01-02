window.initMap = () => {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 35.685175,
      lng: 139.7528,
    },
    zoom: 10,
  });

  map.data.loadGeoJson('../api/downtowns/');

  const colors = new Map([
    [11, 'red'],
    [12, 'blue'],
    [13, 'green'],
    [14, 'black'],
    [15, 'yellow'],
  ]);

  map.data.setStyle(feature => (
    {
      title: feature.getProperty('name'),
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: colors.get(feature.getProperty('commercialAccumulationCode')),
        fillOpacity: 0.5,
        scale: Number(feature.getProperty('annualSalesTurnover')) / 10000,
        strokeColor: 'white',
        strokeWeight: 0.5,
      },
    }
  ));
};
