import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

window.initMap = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 35.685175,
      lng: 139.7528
    },
    zoom: 10
  });

  (async () => {
    const resp = await fetch("../api/downtowns/");
    const json = await resp.json();
    // json.
    json.features.forEach(f => {
      new google.maps.Marker({
        label: {
          color: "#DDDDDD",
          fontSize: "3px",
          text: String(f.properties.annualSalesTurnover)
        },
        position: {
          lat: f.geometry.coordinates[1],
          lng: f.geometry.coordinates[0]
        },
        title: f.properties.name,
        map: map
      });
    });
    console.log(json.features);
  })();

  const colors = new Map([
    [11, "red"],
    [12, "blue"],
    [13, "green"],
    [14, "black"],
    [15, "yellow"]
  ]);
};
