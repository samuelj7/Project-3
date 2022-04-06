//Read in data
const propertyData = "property_data.js";
var d
//Promise

d3.json(propertyData).then(function(data) {
  console.log(data);
  d=data
  init();
});

//Datasets filtered for 2012-2022
function housingType2012(data) {
  return data.year == 2012;
  };
  
function housingType2013(data) {
  return data.year == 2013;
  };

function housingType2014(data) {
  return data.year == 2014;
  };
  
function housingType2015(data) {
  return data.year == 2015;
  };

function housingType2016(data) {
  return data.year == 2016;
  };

function housingType2017(data) {
  return data.year == 2017;
  };

function housingType2018(data) {
  return data.year == 2018;
  };

function housingType2019(data) {
  return data.year == 2019;
  };

function housingType2020(data) {
  return data.year == 2020;
  };

function housingType2021(data) {
  return data.year == 2021;
  };

function housingType2022(data) {
  return data.year == 2022;
  };

//Initiate Select All
function updatePlotly() {
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
  console.log(dataset)
// Initialize values and labels arrays
var values = [];
var labels = [];

//Datasets for Housing Type 2012-2022
if (dataset === 'housingType12') {
  var housingType12 = d.filter(housingType2012)
values= housingType12.map(row => row.inventory);
labels= housingType12.map(row => row.property_type);
}

else if (dataset === 'housingType13') {
  var housingType13 = d.filter(housingType2013)
values= housingType13.map(row => row.inventory);
labels= housingType13.map(row => row.property_type);
}

else if (dataset === 'housingType14') {
  console.log(d.filter(housingType2014))
  var housingType14 = d.filter(housingType2014)
values= housingType14.map(row => row.inventory);
labels= housingType14.map(row => row.property_type);
}

else if (dataset === 'housingType15') {
  var housingType15 = d.filter(housingType2015)
values= housingType15.map(row => row.inventory);
labels= housingType15.map(row => row.property_type);
}

else if (dataset === 'housingType16') {
  var housingType16 = d.filter(housingType2016)
values= housingType16.map(row => row.inventory);
labels= housingType16.map(row => row.property_type);
}

else if (dataset === 'housingType17') {
  var housingType17 = d.filter(housingType2017)
values= housingType17.map(row => row.inventory);
labels= housingType17.map(row => row.property_type);
}

else if (dataset === 'housingType18') {
  var housingType18 = d.filter(housingType2018)
values= housingType18.map(row => row.inventory);
labels= housingType18.map(row => row.property_type);
}

else if (dataset === 'housingType19') {
  var housingType19 = d.filter(housingType2019)
values= housingType19.map(row => row.inventory);
labels= housingType19.map(row => row.property_type);
}

else if (dataset === 'housingType20') {
  var housingType20 = d.filter(housingType2020)
values= housingType20.map(row => row.inventory);
labels= housingType20.map(row => row.property_type);
}

else if (dataset === 'housingType21') {
  var housingType21 = d.filter(housingType2021)
values= housingType21.map(row => row.inventory);
labels= housingType21.map(row => row.property_type);
}

else if (dataset === 'housingType22') {
  var housingType22 = d.filter(housingType2022)
values= housingType22.map(row => row.inventory);
labels= housingType22.map(row => row.property_type);
}
console.log(values)
console.log(labels)
//Restyle on Plotly
  Plotly.restyle("plot", "values", [values])
  Plotly.restyle("plot", "labels", [labels]);
}

d3.select("#selDataset").on("change", updatePlotly);
console.log("some text")

//Initiate first pie chart (2012)
function init(){
var housingType12 = d.filter(housingType2012)
housingTypePie12 = [{
  values: housingType12.map(row => row.inventory),
  labels: housingType12.map(row => row.property_type),
  type: 'pie'
}];
Plotly.newPlot("plot", housingTypePie12)
};