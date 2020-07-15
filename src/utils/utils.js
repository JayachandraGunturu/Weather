
const request = require('request');
const co_ordinates =function(address,callback){
const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiamFjZTIwc2QiLCJhIjoiY2tjYnMwdHNkMXJvMjMzbnhhNW82ZTBodCJ9.jCBWqURoiDbKSZKujUhM-g";

request({url:url,json : true},(error,response)=>{
    if(error)
    callback("Unable to connect to location service",undefined);
    else if(response.body.features.length == 0)
    callback("Not a valid place",undefined);
    else
    callback(undefined,response.body.features[0].geometry.coordinates);
});
}

const weather = function(latitude,longitude,callback){
const url = "https://samples.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=439d4b804bc8187953eb36d2a8c26a02";

request({url : url, json : true},(error,response)=>{

    if(error)
    callback("Unable to connect to weather service",undefined);
    else if(response.body.error)
    callback("Unable to find location",undefined);
    else
    callback(undefined,response.body.weather[0].description);
});

}

module.exports = {co_ordinates,weather};
