var countryCode = 'worldwide'
var map = L.map('map', {
  center: [20.0, 5.0],
  minZoom: 2,
  zoom: 2,
  fullscreenControl: {
    pseudoFullscreen: false // if true, fullscreen to page width and height
}
})

L.control.browserPrint().addTo(map)

let Dataa;


var Mapcountries = [];

const fetchdataCases = async() => { 
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      Dataa = data;
      console.log(Dataa)
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }  
      ));

      

      
      data.map(country => {

        if(country.name == "Western Sahara"){

        }
        else{

        var geojsonMarkerOptions = {
          radius: Math.sqrt(country.cases / 10**4),
          fillColor: "#CC1034",
          color: "#CC1034",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.4
        };
        
        var someFeatures = [{
          "type": "Feature",
          "properties": {
              "name": "Coors Field",
              "show_on_map": true
          },
          "geometry": {
              "type": "Point",
              "coordinates": [country.countryInfo.long, country.countryInfo.lat]
          }
        }, {
          "type": "Feature",
          "properties": {
              "name": "Busch Field",
              "show_on_map": false,
          },
          "geometry": {
              "type": "Point",
              "coordinates": [-104.98404, 39.74621]
          }
        }];
        
        L.geoJSON(someFeatures, {
          pointToLayer: function (feature, latlng) {
              
              return L.circleMarker(latlng, geojsonMarkerOptions);
          }
        }).bindPopup(
          "<img class="+"info-flag"+" src="+country.countryInfo.flag+" >"+
          "<div class="+"info-name"+">"+country.country+"</div>"+
          "<div class="+"infos"+">Cases: "+country.cases+"</div>"+
          "<div class="+"infos"+">Recovered: "+country.recovered+"</div>"+
          "<div class="+"infos"+">Deaths: "+country.deaths+"</div>"
          ).addTo(map);
      }
      })
    });
  };

  const fetchdataRecovered = async() => { 
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      const countries1 = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }
      ));
      data.map(country => {


        if(country.name == "Western Sahara"){

        }
        else{

        var geojsonMarkerOptions = {
          radius: Math.sqrt(country.recovered / 10**4),
          fillColor: "#75BD4B",
          color: "#75BD4B",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.4
        };
        
        var someFeatures = [{
          "type": "Feature",
          "properties": {
              "name": "Coors Field",
              "show_on_map": true
          },
          "geometry": {
              "type": "Point",
              "coordinates": [country.countryInfo.long, country.countryInfo.lat]
          }
        }, {
          "type": "Feature",
          "properties": {
              "name": "Busch Field",
              "show_on_map": false,
          },
          "geometry": {
              "type": "Point",
              "coordinates": [-104.98404, 39.74621]
          }
        }];
        
        L.geoJSON(someFeatures, {
          pointToLayer: function (feature, latlng) {
              
              return L.circleMarker(latlng, geojsonMarkerOptions);
          }
        }).bindPopup(
          "<img class="+"info-flag"+" src="+country.countryInfo.flag+" >"+
          "<div class="+"info-name"+">"+country.country+"</div>"+
          "<div class="+"infos"+">Cases: "+country.cases+"</div>"+
          "<div class="+"infos"+">Recovered: "+country.recovered+"</div>"+
          "<div class="+"infos"+">Deaths: "+country.deaths+"</div>"
          ).addTo(map);
      }
      })
    });
  };


  const fetchdataDeaths = async() => { 
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      Dataa = data;
      console.log(Dataa)
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }  
      ));

      

      
      data.map(country => {

        if(country.name == "Western Sahara"){

        }
        else{

        var geojsonMarkerOptions = {
          radius: Math.sqrt(country.deaths / 10**3),
          fillColor: "#a9a9a9",
          color: "#a9a9a9",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.4
        };
        
        var someFeatures = [{
          "type": "Feature",
          "properties": {
              "name": "Coors Field",
              "show_on_map": true
          },
          "geometry": {
              "type": "Point",
              "coordinates": [country.countryInfo.long, country.countryInfo.lat]
          }
        }, {
          "type": "Feature",
          "properties": {
              "name": "Busch Field",
              "show_on_map": false,
          },
          "geometry": {
              "type": "Point",
              "coordinates": [-104.98404, 39.74621]
          }
        }];
        
        L.geoJSON(someFeatures, {
          pointToLayer: function (feature, latlng) {
              
              return L.circleMarker(latlng, geojsonMarkerOptions);
          }
        }).bindPopup(
          "<img class="+"info-flag"+" src="+country.countryInfo.flag+" >"+
          "<div class="+"info-name"+">"+country.country+"</div>"+
          "<div class="+"infos"+">Cases: "+country.cases+"</div>"+
          "<div class="+"infos"+">Recovered: "+country.recovered+"</div>"+
          "<div class="+"infos"+">Deaths: "+country.deaths+"</div>"
          ).addTo(map);
      }
      })
    });
  };


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)



var basemaps = {
  OpenStreetMap : L.tileLayer.wms('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', {
    layers: 'TOPO-WMS,OSM-Overlay-WMS'
}),
  Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
      layers: 'TOPO-WMS'
  }),

  Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
      layers: 'OSM-Overlay-WMS'
  }),

  'Topography, then places': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
      layers: 'TOPO-WMS,OSM-Overlay-WMS'
  }),

  'Places, then topography': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
      layers: 'OSM-Overlay-WMS,TOPO-WMS'
  })
};

L.control.layers(basemaps).addTo(map);



basemaps.Topography.addTo(map);

var wmsLayer = L.tileLayer.wms('http://localhost:8080/geoserver/EHTP/wms', {
    layers: 'Regions',
}).addTo(map);



function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  }
}


//Function data retrun the graphes
const buildChartData = (data, casesType) => {
  let chartData = [];
  let chartDataX = [];
  let chartDataY = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartDataX.push(newDataPoint.x);
      chartDataY.push(newDataPoint.y);
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return {chartDataX,chartDataY};
}

fetch('https://disease.sh/v3/covid-19/historical/all')
    .then(jsonData => jsonData.json())
    .then(data => {
    printCases(data)
    printRevored(data)
    printdeaths(data)})

let printCases = (dataa) => {
  console.log(dataa)

  /************Covid-19 Cases History Chart*************/
  var {chartDataX,chartDataY} = buildChartData(dataa,'cases');

  console.log("All data X :",chartDataX)
  console.log("All data Y :",chartDataY)

  const data = {
    labels: chartDataX,
    datasets: [{
      label: 'Cases History',
      backgroundColor: '#CC1034',
      borderColor: '#CC1034',
      data: chartDataY,
    }]
  };
  
  const config = {
    type: 'line',
    data,
    options: {}};
  
  var myChart = new Chart(
    document.getElementById('CasesChart'),
    config
  );
}

 /************Covid-19 Recovered History Chart*************/
let printRevored = (dataa) => {
  console.log(dataa)

 
  var {chartDataX,chartDataY} = buildChartData(dataa,'recovered');

  console.log("All data recoveredChart X :",chartDataX)
  console.log("All data recoveredChart Y :",chartDataY)
  
  const data = {
    labels: chartDataX,
    datasets: [{
      label: 'Recovery History',
      backgroundColor: '#99ff99',
      borderColor: '#99ff99',
      data: chartDataY,
    }]
  };
  
  const config = {
    type: 'line',
    data,
    options: {}};
  
  var myChart = new Chart(
    document.getElementById('recoveredChart'),
    config
  );
}

 /************Covid-19 Deaths History Chart*************/
 let printdeaths = (dataa) => {
  console.log(dataa)

 
  var {chartDataX,chartDataY} = buildChartData(dataa,'deaths');

  console.log("All data recoveredChart X :",chartDataX)
  console.log("All data recoveredChart Y :",chartDataY)
  
  const data = {
    labels: chartDataX,
    datasets: [{
      label: 'Deaths History',
      backgroundColor: '#cccccc',
      borderColor: '#cccccc',
      data: chartDataY,
    }]
  };
  
  const config = {
    type: 'line',
    data,
    options: {}};
  
  var myChart = new Chart(
    document.getElementById('deathsChart'),
    config
  );
}

 /************Covid-19 WoldWide Chart*************/
 fetch('https://disease.sh/v3/covid-19/all')
    .then(jsonData => jsonData.json())
    .then(data => {
    printWWC(data)})

 let printWWC = (dataa) => {
  console.log(dataa)
  var {chartDataX,chartDataY} = buildChartData(dataa,'deaths');

  console.log("All data recoveredChart X :",chartDataX)
  console.log("All data recoveredChart Y :",chartDataY)
  
  const data = {
    labels: [
      'Cases',
      'Recovered',
      'Deaths'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [dataa.cases, dataa.recovered, dataa.deaths],
      backgroundColor: [
        '#CC1034',
        '#99ff99',
        '#cccccc'
      ],
      hoverOffset: 4
    }]
  };
  
  const config = {
    type: 'doughnut',
    data: data,
  };
  
  var myChart = new Chart(
    document.getElementById('worldChart'),
    config
  );
}


fetchdataCases();

$("#Recovered").click(function() {
  map.eachLayer(function (layer) {
    map.removeLayer(layer);
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)
  fetchdataRecovered();
});

$("#deaths").click(function() {
  map.eachLayer(function (layer) {
    map.removeLayer(layer);
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)
  fetchdataDeaths();
});

$("#Cases").click(function() {
  map.eachLayer(function (layer) {
    map.removeLayer(layer);
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)
  fetchdataCases();
});

function popDropdown(test)
{
  let btnPop = document.getElementById("dropdownBtn");
  let select = document.getElementById("dropdownOptions");
  btnPop.addEventListener('click',()=> {
    options =
    `<li><a class="dropdown-item countryName" id="worldwide" >worldwide</a></li>`+ 
    test.map(t => `
    <li><a class="dropdown-item countryName" id="${t.value}" >${t.name}</a></li>`).join('\n');
    select.innerHTML = options
  });

}

const fetchdata = async() => { 
  await fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
    const countries1 = data.map((country) => ({
      name: country.country,
      value: country.countryInfo.iso2,
    }
    ));

    const countries2 = data.map((country) => ({
      name: country.country,
    }
    ));
    console.log("all countries1 : ", countries1);
    console.log("all countries 2 : ", countries2);
    popDropdown(countries1)
  })}
  fetchdata()


  const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";


 


  const onCountryChange = async () => {

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        

    //https://disease.sh/v3/covid-19/all
    //https://disease.sh/v3/covid-19/countries/[countryCode]

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        countryCode === "worldwide"
          ?  map.setView([0,0], 4) 
          :  map.setView([data.countryInfo.lat,data.countryInfo.long], 5);
        $('.TotalCases').text(prettyPrintStat(data.cases))
        $('.DailyCases').text(data.todayCases)

        $('.TotalDeaths').text(prettyPrintStat(data.deaths))
        $('.DailyDeaths').text(data.todayDeaths)

        $('.TotalRecovered').text(prettyPrintStat(data.recovered))
        $('.DailyRecovered').text(data.todayRecovered)

        


        map.setView([data.countryInfo.lat,data.countryInfo.long], 5);
      });
  };

  $("body").on('click', '.dropdown-menu li a', function () {
    console.log(this.id)
    countryCode = $(this).text()
    $('#dropdownBtn').text($(this).text())
    onCountryChange();
});

  console.log(countryCode);