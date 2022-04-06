//Read in data
const propertyData = "property_data.js";

//Promise
const dataPromise = d3.json(propertyData);
console.log("Data Promise: ", dataPromise);
d3.json(propertyData).then(function(data) {
  console.log(data);

//Data for 2012
function housingType2012(data) {
return data.year == 2012;
};
let housingType12 = data.filter(housingType2012)

//Initiate first pie chart (2012)
function init() {housingTypePie12 = [{
     values: housingType12.map(row => row.inventory),
     labels: housingType12.map(row => row.property_type),
     type: 'pie'
 }];
 Plotly.newPlot("plot", housingTypePie12)
 };

//Data for 2013
function housingType2013(data) {
  return data.year == 2013;
 };
let housingType13 = data.filter(housingType2013);
console.log(housingType13);

//Data for 2014
function housingType2014(data) {
  return data.year == 2014;
 };
let housingType14 = data.filter(housingType2014);

//Data for 2015
function housingType2015(data) {
  return data.year == 2015;
 };
let housingType15 = data.filter(housingType2015);
console.log(housingType15);

//CODE THAT DOESN'T WORK RIGHT YET

//d3.selectAll("selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
//function updatePlotly() {
// // Use D3 to select the dropdown menu
//var dropdownMenu = d3.select("selDataset");
// // Assign the value of the dropdown menu option to a variable
//var dataset = dropdownMenu.property("value");

// // Initialize x and y arrays
//var values = [];
//var labels = [];


//if (dataset === 'housingType12') {
//values: housingType12.map(row => row.inventory);
//labels: housingType12.map(row => row.property_type);
//}

//else if (dataset === 'housingType13') {
//values: housingType13.map(row => row.inventory);
//labels: housingType13.map(row => row.property_type);
//}

//Plotly.restyle("plot", "values", [values]);
//Plotly.restyle("plot", "labels", [labels]);

init();
})





//CODE I MIGHT NEED LATER
// let trace2013 = {
//     values: housingType13.map(row => row.inventory),
//     labels: housingType13.map(row => row.property_type),
//     type: 'pie'
// };

// let traceData12 = [trace2012];
// let traceData13 = [trace2013];

// let layout1 = {
//   title: "Inventory by Housing Type in CA 2012"
// };
// let layout2 = {
//   title: "Inventory by Housing Type in CA 2013"
// };

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot1", traceData12, layout1);

// Plotly.newPlot("plot2", traceData13, layout2);