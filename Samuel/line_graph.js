let california_housing = "data.js"

//d3.json(california_housing).then(function(data) {
    //console.log(data);
  //  sorted_data = data.sort((a,b) => b.Amount_sold_over - a.Amount_sold_over)
 //   sliced_data = sorted_data.slice(0, 10)
  //  console.log(sliced_data)
    
    d3.json(california_housing).then(function(data) {
        console.log(data);
        function top10(data){return data.Year == "2021" & data.Property_type == "All Residential"} 
        let County = data.filter(top10)
        console.log(County)
        sorted_data = County.sort(function sortFunction(a,b) {return b.Amount_sold_over - a.Amount_sold_over;});
        sliced_data = sorted_data.slice(0, 10)
        console.log(sliced_data)
        let line = sliced_data.map(data =>`${data.County}`)
        console.log(line)
        
        function actual_data(data){return data.County == line[0] & data.Property_type == "All Residential"} 
let alpine = data.filter(actual_data)
        console.log(alpine)

        function actual_data1(data){return data.County == line[1] & data.Property_type == "All Residential"} 
let colusa = data.filter(actual_data1)
console.log(colusa)

function actual_data2(data){return data.County == line[2] & data.Property_type == "All Residential"} 
let alameda = data.filter(actual_data2)
console.log(alameda)

function actual_data3(data){return data.County == line[3] & data.Property_type == "All Residential"} 
let san_francisco = data.filter(actual_data3)
console.log(san_francisco)

function actual_data4(data){return data.County == line[4] & data.Property_type == "All Residential"} 
let san_benito = data.filter(actual_data4)
console.log(san_benito)

function actual_data5(data){return data.County == line[5] & data.Property_type == "All Residential"} 
let san_mateo = data.filter(actual_data5)
console.log(san_mateo)

function actual_data6(data){return data.County == line[6] & data.Property_type == "All Residential"} 
let calaveras = data.filter(actual_data6)
console.log(calaveras)

function actual_data7(data){return data.County == line[7] & data.Property_type == "All Residential"} 
let santa_clara = data.filter(actual_data7)
console.log(santa_clara)

function actual_data8(data){return data.County == line[8] & data.Property_type == "All Residential"} 
let glenn = data.filter(actual_data8)
console.log(glenn)

function actual_data9(data){return data.County == line[9] & data.Property_type == "All Residential"} 
let marin = data.filter(actual_data9)
console.log(marin)











          console.log(sliced_data[0]["Amount_sold_over"])
        hold_data = []
for(i=0; i<alpine.length; i++){
hold_data.push(alpine[i]["Amount_sold_over"])
};
console.log(hold_data)
  

//console.log(hold_data);
// Line Graph
var year1= ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]
var trace1 = {
    x: year1,
    y: hold_data, 
    type: "scatter",
    name: "Alpine"
};
var tracedata = [trace1];

hold_data = []
for(i=0; i<colusa.length; i++){
hold_data.push(colusa[i]["Amount_sold_over"])
};
var trace2 = {
  x: year1,
  y: hold_data,
  type: "scatter",
  name: "Colusa"
};
var tracedata = [trace2]

hold_data = []
for(i=0; i<alameda.length; i++){
hold_data.push(alameda[i]["Amount_sold_over"])
};
var trace3 = {
  x: year1,
  y: hold_data,
  type: "scatter",
  name: "Alameda"
};

hold_data = []
for(i=0; i<san_francisco.length; i++){
hold_data.push(san_francisco[i]["Amount_sold_over"])
};
var trace4 = {
  x: year1,
  y: hold_data,
  type: "scatter",
  name: "San Francisco"
};

hold_data = []
for(i=0; i<san_benito.length; i++){
hold_data.push(san_benito[i]["Amount_sold_over"])
};
var trace5 = {
  x: year1,
  y: hold_data,
  type: "scatter",
  name: "San Benito"
};

hold_data = []
for(i=0; i<san_mateo.length; i++){
hold_data.push(san_mateo[i]["Amount_sold_over"])
};
var trace6 = {
  x: year1,
  y: hold_data,
  type: "scatter",
  name: "San Mateo"
};

hold_data = []
for(i=0; i<calaveras.length; i++){
hold_data.push(calaveras[i]["Amount_sold_over"])
};
var trace7 = {
  x: year1,
  y: hold_data,
  type: "scatter",
  name: "Calaveras"
};

hold_data = []
for(i=0; i<santa_clara.length; i++){
hold_data.push(santa_clara[i]["Amount_sold_over"])
};
var trace8 = {
  x: year1,
  y: hold_data,
  type: "scatter",
  name: "Santa Clara"
};

hold_data = []
for(i=0; i<glenn.length; i++){
hold_data.push(glenn[i]["Amount_sold_over"])
};
var trace9 = {
  x: year1,
  y: hold_data,
  type: "scatter",
  name: "Glenn"
};

hold_data = []
for(i=0; i<marin.length; i++){
hold_data.push(marin[i]["Amount_sold_over"])
};
var trace10 = {
  x: year1,
  y: hold_data,
  type: "scatter",
  name: "Marin"
};
var tracedata = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10]

  var layout = {
    title: "Top 10 Counties Amount Sold Over Prices Over Last Decade",
    height: 650,
    plot_bgcolor: "white",
    showgrid: true,
    linewidth: 3,
    xxaxis: {
      nticks: 10,
      zeroline: true,
      showline: true,
      gridwidth: 10,
      gridcolor: '#bdbdbd',
    },
    yaxis: {
      showgrid: true,
      zeroline: true,
      showline: true,
      mirror: 'ticks',
      gridcolor: '#bdbdbd',
      gridwidth: 2,
      zerolinecolor: '#969696',
      zerolinewidth: 4,
      linecolor: '#636363',
      linewidth: 4,
      title: {
        text: "Amount Sold Over Listing Price"
      }
    }
  }
  
  
  
  Plotly.newPlot('myDiv', tracedata, layout);
});


