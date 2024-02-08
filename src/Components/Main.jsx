import React, {  useState } from 'react'
import './Main.css'
// https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=7f43863472b944ccaeacf77f44501752

  
function Main(){

    const[value,setValue]=useState('');
    const[weather,setWeather]=useState({
        temprature:"",
        location:"",
        speed:"",
        humidity:"",
        sea_level:"",
        grnd_level:"",
        lon:"",
        lat:""
    });

    const SearchCity=()=>{

        if(value===""){
            alert("")
            return 0;
        }
        else{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=7f43863472b944ccaeacf77f44501752`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data); 
            let loc=data.name;
            let temp=Math.round(data.main.temp);
            let spd=Math.round(data.wind.speed);
            let hum=data.main.humidity;
            let sea_l=data.main.sea_level;
            let grnd_=data.main.grnd_level;
            let lonn=data.coord.lon;
            let lati=data.coord.lat;
           

            const wdata={
                temprature:temp,
                location:loc,
                speed:spd,
                humidity:hum,
                sealevel:sea_l,
                grndlevel:grnd_,
                longitude:lonn,
                latitude:lati
               
            }
            setWeather(wdata);
        }
        );

        }
    }

  return (

    <div className='container'>

        <div className="main">
        {/* Header Section */}
        <div className="searchbar">
            <div className="searchbox">
            <input type="text" placeholder='Enter City Name' onChange={e=>setValue(e.target.value)}/>
            </div><br />
            <div className="searchbtn">
                <button onClick={SearchCity}>Search</button>
            </div>
        </div>

        {/* location and temprature part */}
        <div className="maindisplay">
            <div className='templocation'>
            <h1>{weather.temprature+"°c"}</h1>
            <p>{weather.location}</p>
          
            </div>
        </div>


        {/* bottomdisplay */}
        <div className="bottomdisplay">
        <div className="bottomdetails">           
            <div className="humidity">
                <p>Humidity</p>
                <h4>{weather.humidity}</h4>
            </div>
            <div className='windspeed'>
                <p>Wind Speed</p>
                <h4>{weather.speed+"km/h"}</h4>
            </div>
            <div className='Sea-Level'>
                <p>Sea-Level</p>
                <h4>{weather.sealevel}</h4>
            </div>
            <div className='Ground-Level'>
                <p>Ground-Level</p>
                <h4>{weather.grndlevel}</h4>
            </div>

        </div>
        </div>
        <div className="bottomsecond">
        <div className="bottomdetailssecond">           
            <div className="">
                <p>Longitude</p>
                <h4>{weather.longitude}</h4>
            </div>
            <div className='    '>
                <p>Latitude</p>
                <h4>{weather.latitude}</h4>
            </div>
          


        </div>
        </div>


        


        </div>
    </div>
  )
}

export default Main