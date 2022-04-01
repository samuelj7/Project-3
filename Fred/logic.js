// Define path for source data
var CaliHousing = "ca_county_data2.json"

// Create a map object.
var CaliMap = L.map("map", {
    center: [36.7783, -119.4179],
    zoom: 6
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(CaliMap);

// Create Icon
// (4/1) try to come up with different icons for each property type later...
var icons = {
    ALL_RESIDENTIAL: L.ExtraMarkers.icon({
      icon: "ion-ios-home",
      iconColor: "white",
      markerColor: "yellow",
      shape: "penta"
    }),
    TOWNHOUSE: L.ExtraMarkers.icon({
      icon: "ion-ios-home",
      iconColor: "white",
      markerColor: "red",
      shape: "circle"
    }),
    Condo_Coop: L.ExtraMarkers.icon({
      icon: "ion-ios-home",
      iconColor: "white",
      markerColor: "blue-dark",
      shape: "circle"
    }),
    MULTI_FAMILY: L.ExtraMarkers.icon({
      icon: "ion-ios-home",
      iconColor: "white",
      markerColor: "orange",
      shape: "circle"
    }),
    SINGLE_FAMILY: L.ExtraMarkers.icon({
      icon: "ion-ios-home",
      iconColor: "white",
      markerColor: "green",
      shape: "circle"
    })
  };


// ↓ (4/1) Could later be used to set condition for different price ranges...just a thought
// // Initialize stationStatusCode, which will be used as a key to access the appropriate layers, icons, and station count for the layer group.
// var stationStatusCode;

// // Loop through the stations (they're the same size and have partially matching data).
// for (var i = 0; i < stationInfo.length; i++) {

// // Create a new station object with properties of both station objects.
// var station = Object.assign({}, stationInfo[i], stationStatus[i]);
// // If a station is listed but not installed, it's coming soon.
// if (!station.is_installed) {
//     stationStatusCode = "COMING_SOON";
// }
// // If a station has no available bikes, it's empty.
// else if (!station.num_bikes_available) {
//     stationStatusCode = "EMPTY";
// }
// // If a station is installed but isn't renting, it's out of order.
// else if (station.is_installed && !station.is_renting) {
//     stationStatusCode = "OUT_OF_ORDER";
// }
// // If a station has less than five bikes, it's status is low.
// else if (station.num_bikes_available < 5) {
//     stationStatusCode = "LOW";
// }
// // Otherwise, the station is normal.
// else {
//     stationStatusCode = "NORMAL";
// }

// Create a marker with the appropriate icon and coordinates.
// var Marker = L.marker([CaliHousing.lat, CaliHousing.lng],{
//     icons
// }).addTo(CaliMap)//Need syntax check

//Loop through CaliHousing Object, and create one marker for each county.
for (var i = 0; i < CaliHousing.length; i++){
    L.marker([CaliHousing[i].lat, CaliHousing[i].lng],{
        icon: icons
    }).bindPopup(`<h1>${CaliHousing[i].name}</h1> <hr> <h1>Median Sales Price: ${CaliHousing[i].price}</h1>`).addTo(CaliMap);
}



