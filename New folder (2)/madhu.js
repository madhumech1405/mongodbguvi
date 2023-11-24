// Restcountries using Fetch API;

var result = fetch("https://restcountries.com/v2/all")
.then((data)=>data.json())
.then((data1)=> {
    var container = document.createElement("div");
    container.setAttribute("class","container");
    var row = document.createElement("div");
    row.setAttribute("class","row");
    var h1 = document.createElement("h1");
    h1.innerHTML="Restcountries using Fetch API";
    container.append(h1,row);
    document.body.append(container);
    for(var i=0;i<data1.length;i++){
        var col = document.createElement("div");
        col.setAttribute("class","col-lg-4");
        col.innerHTML=`<div class="smallbox">
        <div class="card">
        <img src="${data1[i].flag}" class="card-img-top" alt="flag" height="150px" width="100px">
        <div class="card-body">
          <h5 class="card-title">${data1[i].name}</h5>
          <span class="card-text">Capital: ${data1[i].capital}</span>
          <span class="card-text">Region: ${data1[i].region}</span>
          <span class="card-text">Latitude: </span>
          <span class="card-text">Longitude: </span>
          <span class="card-text">Country Code: ${data1[i].alpha3Code}</span>
          <br>
          <button class="btn btn-primary" Onclick="opendata()">Click for Weather</button>
        </div>
        </div>
      </div>`
      var madhu = data1[i].name;
      var latlong = data1[i].latlng;
      console.log(latlong);
      opendata(madhu,...latlong);
      row.append(col);
    }
})
.catch((error)=>console.log(error));

async function opendata(name,lat,lon){
    try {
      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=443b3318c37d5d0e758a46abc8e96f7b`);
      let res1 = await res.json();
      console.log(`Country name:${name}, Temp:${res1.main.temp}`);
    } catch (error) {
      console.log(error);
    }
  }