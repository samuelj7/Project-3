// Create a map object that centers on California.
var CaliMap = L.map("map", {
  center: [36.7783, -119.4179],
  zoom: 6,
  // layers: [
  //   layers.ALL_RESIDENTIAL,
  //   layers.TOWNHOUSE,
  //   layers.CONDO_COOP,
  //   layers.MULTI_FAMILY,
  //   layers.SINGLE_FAMILY
  // ] //something needs to be fixed with layers here.
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(CaliMap);//OK

// Initialize all the LayerGroups that we'll use.
var layers = {
  ALL_RESIDENTIAL: new L.LayerGroup(),
  TOWNHOUSE: new L.LayerGroup(),
  CONDO_COOP: new L.LayerGroup(),
  MULTI_FAMILY: new L.LayerGroup(),
  SINGLE_FAMILY: new L.LayerGroup()
};//OK

// Create an overlays object to add to the layer control.
var overlays = {
  "All Residential": layers.ALL_RESIDENTIAL,
  "Townhouse": layers.TOWNHOUSE,
  "Condo/Co-Op": layers.CONDO_COOP,
  "Multi-Family": layers.MULTI_FAMILY,
  "Single-Family": layers.SINGLE_FAMILY
};//OK

// Create a control for our layers, and add our overlays to it.
L.control.layers(null, overlays).addTo(CaliMap);//OK

// Create Icons Object for each property type
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
  CONDO_COOP: L.ExtraMarkers.icon({
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

// // Initialize housingType, which will be used as a key to access the appropriate layers and icons for the layer group.
// var housingType;

// // Loop through the data and 
// for (var i = 0; i < hou)

// Define path for source data
var CaliHousing = "ca_county_data2.json"

// Call in and loop through the data to create markers for each counties.
d3.json(CaliHousing).then(function (data) {
  for (var i = 0; i < data.length; i++) {
    try {
      let location = [data[i].lat, data[i].lng];
      let price = data[i].Median_sales_price;
      let countyName = data[i].County;
      let type = data[i].Property_type;

      let newMarker = L.marker(location, {
        icon: icons["SINGLE_FAMILY"]
      }).bindPopup(`<h4>${countyName}</h4> <hr> <h4>Property Type: ${type} <hr> <h4>Median Sales Price: ${price}</h4>`).addTo(CaliMap);

      // newMarker.addTo(layers);
    }
    catch(err) {
      console.log(err)
    }
  }
})

// 1. Make the dang icons work!
// 2. Update JSON and add more info (other sales prices, other info)
//// such as property inventory numbers (or listed), 
// 3. Create legend that includes additional info from 2. when you click icons
// 4. create dropdown by years


// // Icon options
// var iconOptions = {
//   iconUrl: 'logo.png',
//   iconSize: [50, 50]
// }

// // Creating a custom icon
// var customIcon = L.icon(iconOptions);


