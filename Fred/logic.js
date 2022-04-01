// Variable "Counties" that holds lng/lat, name, and median sales price.
var Counties = [{
    location: [33.7175, -117.8311],
    name: "Orange",
    price: 500000
}
    //   ,
    //   {
    //     location: [41.8781, -87.6298],
    //     name: "Chicago",
    //     population: 2720546
    //   },
    //   {
    //     location: [29.7604, -95.3698],
    //     name: "Houston",
    //     population: 2296224
    //   },
    //   {
    //     location: [34.0522, -118.2437],
    //     name: "Los Angeles",
    //     population: 3971883
    //   },
    //   {
    //     location: [41.2524, -95.9980],
    //     name: "Omaha",
    //     population: 446599
    //   }
];

// Create a map object.
var CaliMap = L.map("map", {
    center: [36.7783, -119.4179],
    zoom: 6
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(CaliMap);

