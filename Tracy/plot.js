// Get seasonal_data endpoint
let seasonal_data = "data.js";

// Put all the months in a variable and call it in all the x-axis
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Fetch the JSON data and console log it
d3.json(seasonal_data).then(function (data) {
  console.log(data);
 
  //Input the data we want to plot in the stacked bar graph
  var trace1 = {
    x: months,
    y: data.map((object) => object.Number_Sold),
    name: "Number Sold",
    type: "bar",
  };
  
  var trace2 = {
    x: months,
    y: data.map((object) => object.Pending_Sales),
    name: "Pending Sales",
    type: "bar",
  };
  
  var trace3 = {
    x: months,
    y: data.map((object) => object.Inventory),
    name: "Inventory",
    type: "bar",
  };
  var data = [trace1, trace2, trace3];

  var layout = { barmode: "stacked" };

  Plotly.newPlot("myDiv", data);
});

