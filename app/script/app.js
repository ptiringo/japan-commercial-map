let map;

initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 35.685175,
            lng: 139.7528
        },
        zoom: 10
    });

    map.data.loadGeoJson('../api/downtowns/');

    map.data.setStyle(feature => {
        return {
            title: feature.getProperty('name'),
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: 'red',
                fillOpacity: .5,
                scale: Number(feature.getProperty('annualSalesTurnover')) / 10000,
                strokeColor: 'white',
                strokeWeight: .5
            }
        };
    });

};