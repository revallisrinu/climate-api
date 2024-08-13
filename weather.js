let apiKey = "b2560e6bb33b443cb2c47fc730266f70";
let apiUrl = "http://api.weatherbit.io/v2.0/current";
let seacrhbox=document.querySelector(".search-input")
let seacrhbtn=document.querySelector(".search-button")
let weathericon=document.querySelector(".weather-icon")
// console.log(weathericon)


let checkWeather = async (city) => {
    let response = await fetch(`${apiUrl}?key=${apiKey}&city=${city}`);
    let output = await response.json();
    // console.log(output.data);

    document.querySelector('.city').innerHTML=output. data[0].city_name;
    document.querySelector(".temp").innerHTML= Math.round(output. data[0].app_temp)+ "°C";
    document.querySelector(".humidity").innerHTML= output. data[0].clouds + "%";
    document.querySelector(".windspeed").innerHTML=output. data[0].aqi + "km/hour";

    if(output.data[0].clouds==0){
      weathericon.src="assests/rain.png"

    }else if(output.data[0].clouds==0 && output.data[0].clouds==20){
       weathericon.src="assests/drizzle.png"

    }else if(output.data[0].clouds=20 && output.data[0].clouds>=30){
       weathericon.src="assests/clouds.png"

    }else{
      weathericon.src="assests/humidity.png"
    }
   
};
seacrhbtn.addEventListener("click",()=>{
  checkWeather(seacrhbox.value);
})




// let apiKey = "b2560e6bb33b443cb2c47fc730266f70";
// let apiUrl = "http://api.weatherbit.io/v2.0/current";
// let checkWeather = async (city) => {
//     let response = await fetch(`${apiUrl}?key=${apiKey}&city=${city}`);
//     let output = await response.json();
//       console.log(output.data)
// }

// checkWeather('ireland')