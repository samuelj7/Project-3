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
};

// Create a map object that centers on California.
var CaliMap = L.map("map", {
  center: [36.4783, -119.4179],
  zoom: 7,
  layers: [
    layers.ALL_RESIDENTIAL,
    layers.TOWNHOUSE,
    layers.CONDO_COOP,
    layers.MULTI_FAMILY,
    layers.SINGLE_FAMILY
  ]
});

tile_Layer.addTo(CaliMap);

// Create an overlays object to add to the layer control (top-right of map).
var overlays = {
  "All Residential": layers.ALL_RESIDENTIAL,
  "Townhouse": layers.TOWNHOUSE,
  "Condo/Co-Op": layers.CONDO_COOP,
  "Multi-Family": layers.MULTI_FAMILY,
  "Single-Family": layers.SINGLE_FAMILY
};

// Create a control for our layers, and add our overlays to it.
L.control.layers(null, overlays).addTo(CaliMap);

// Create Icons Object for each property type
var icons = {
  ALL_RESIDENTIAL: L.ExtraMarkers.icon({
    icon: "ion-android-home",
    iconColor: "white",
    markerColor: "pink",
    shape: "penta"
  }),
  TOWNHOUSE: L.ExtraMarkers.icon({
    icon: "ion-ios-home-outline",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  CONDO_COOP: L.ExtraMarkers.icon({
    icon: "ion-ios-home-outline",
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
  var yrsel = 2021;
  var year_ = data.filter(pax=>pax.Year==yrsel);

  for (var i = 0; i < year_.length; i++) {
    let location = [year_[i].lat, year_[i].lng];
    let price = year_[i].Median_sales_price;
    let price_rev = price.toLocaleString("en-US");
    let countyName = year_[i].County;
    let type = year_[i].Property_type;
    let year = year_[i].Year


    if (type == "All Residential") {
      housingType = "ALL_RESIDENTIAL";
    }
    else if (type == "Condo/Co-op") {
      housingType = "CONDO_COOP";
    }
    else if (type == "Multi-Family (2-4 Unit)") {
      housingType = "MULTI_FAMILY";
    }
    else if (type == "Single Family Residential") {
      housingType = "SINGLE_FAMILY";
    }
    else {
      housingType = "TOWNHOUSE";
    }

    let newMarker = L.marker(location, {
      icon: icons[housingType]
    }).bindPopup(`<h4>County Name: ${countyName}</h4> <hr> <h4>Property Type: ${type} <hr> <h4>Median Sales Price: ${price_rev}</h4> <hr> <h4>Year: ${year}`).addTo(CaliMap);

    // Add the new marker to the appropriate layer.
    newMarker.addTo(layers[housingType]);
  };
});

// ----------------------------------------------------------------------------
// For Project-4 Improvements:
// Median Sales Price dropdown by years (2012~2022).
// more info included in HTML or Legend