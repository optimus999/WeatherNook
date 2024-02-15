import React, { Component } from 'react';
class componentName extends Component {
  render() {
    let {name,country,region,description,main,temp,feels_like,temp_min,temp_max,humidity,sunrise,sunset,windspeed,cloudcoverage,formattedtime}=this.props;
    return (

      <div> 
        {/* <h2 style={{marginLeft:'38%'}}>Weather Information at {formattedtime}</h2> */}
        

       <div className='infoholder'>
       <div className="card">
           <p><strong>Location:</strong> {name} , {region} , {country}.</p>
           <div className="divider"></div>
           {/* <p><strong>Location:</strong> {name} , {region} , {country} .</p> */}
           <p><strong>Description:</strong> {main} , mainly {description}.</p>
           {/* <p><strong>Temperature:</strong> <span class="temperature"> {parseFloat(temp.toFixed(2))} °C.</span></p> */}
           <p><strong>Feels Like:</strong> {parseFloat(feels_like.toFixed(2))} °C.</p>
           <p><strong>Cloud Coverage:</strong> {cloudcoverage}% .</p>
           <p><strong>Min Temperature:</strong> {parseFloat(temp_min.toFixed(2))}°C .</p>
           <div className="divider"></div>
      </div>

      <div className="card">
          <p><strong>Max Temperature :</strong> {parseFloat(temp_max.toFixed(2))} °C .</p>
          <div className="divider"></div>
          <p><strong>Humidity : </strong> {humidity}% .</p>
          {/* <p><strong>Temperature:</strong> <span class="temperature">37.89 °C</span></p> */}
          <p><strong>Sunrise : </strong> {new Date(sunrise * 1000).toLocaleTimeString()} .</p>
          <p><strong>Sunset : </strong> {new Date(sunset * 1000).toLocaleTimeString()} .</p>
          <p><strong>WindSpeed :</strong> {windspeed} m/sec.</p>
          <div class="divider"></div>
      </div>
       </div>
        
      </div>
    );
  }
}

export default componentName;
