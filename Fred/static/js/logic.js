// Add a tile layer.
var tile_Layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Initialize all the LayerGroups that we'll use.
var layers = {
  ALL_RESIDENTIAL: new L.LayerGroup(),
  TOWNHOUSE: new L.LayerGroup(),
  CONDO_COOP: new L.LayerGroup(),
  MULTI_FAMILY: new L.LayerGroup(),
  SINGLE_FAMILY: new L.LayerGroup()
};//OK

// Create a map object that centers on California.
var CaliMap = L.map("map", {
  center: [36.7783, -119.4179],
  zoom: 6,
  layers: [
    layers.ALL_RESIDENTIAL,
    layers.TOWNHOUSE,
    layers.CONDO_COOP,
    layers.MULTI_FAMILY,
    layers.SINGLE_FAMILY
  ]//OK
});

tile_Layer.addTo(CaliMap);

// Create an overlays object to add to the layer control (top-right of map).
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
    shape: "circle",
  })
};

// Define path for source data
var CaliHousing = "Resources/ca_county_data2.json"

// Initialize housingType, which will be used as a key to access the appropriate layers and icons for the layer group.
var housingType;

// Call in and loop through the data to create markers for each counties.
d3.json(CaliHousing).then(function (data) {
  for (var i = 0; i < data.length; i++) {
    try {
      let location = [data[i].lat, data[i].lng];
      let price = data[i].Median_sales_price;
      let countyName = data[i].County;
      let type = data[i].Property_type;
      let year = data[i].Year

      if (type == "All Residential"){
        housingType = "ALL_RESIDENTIAL";
      }
      else if (type == "Condo/Co-op"){
        housingType = "CONDO_COOP";
      }
      else if (type == "Multi-Family (2-4 Unit)"){
        housingType = "MULTI_FAMILY";
      }
      else if (type == "Single Family Residential"){
        housingType = "SINGLE_FAMILY";
      }
      else {
        housingType = "TOWNHOUSE";
      }//OK

      let newMarker = L.marker(location, {
        icon: icons[housingType]  
      }).bindPopup(`<h4>County Name: ${countyName}</h4> <hr> <h4>Property Type: ${type} <hr> <h4>Median Sales Price: ${price}</h4> <hr> <h4>Year: ${year}`).addTo(CaliMap);

      // Add the new marker to the appropriate layer.
      newMarker.addTo(layers[housingType]);
    }
    catch(err) {
      console.log(err)
    }
  }
})

// ----------------------------------------------------------------------------

// 1. Make "Single Family" marker by default when landing on a page.
// 2. Update JSON and add more info (other sales prices, other info)
//// such as property inventory numbers (or listed), 
// 3. Create legend that includes additional info from 2. when you click icons
// 4. create dropdown by years
// (4/3) make single-family icons default
// (4/4) new problem : maps only 2022 (last entries in dataset), and cannot make one year or one property-type default.


// // Icon options
// var iconOptions = {
//   iconUrl: 'logo.png',
//   iconSize: [50, 50]
// }

// // Creating a custom icon
// var customIcon = L.icon(iconOptions);


