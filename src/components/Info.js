import React, { Component } from 'react';
// import icon from '../icon.png';
import '../App.css';
import ReactAnimatedWeather from "react-animated-weather";

class componentName extends Component {

  render() {
    let {countryCode,statename,description,feels_like,cloudcoverage,humidity,windspeed,sunrise,sunset,icon,color,size,animate}=this.props;
    return (
      <div className='check'> 
        <div className='infoholder'>
        <div className="image"><div>
        <ReactAnimatedWeather
          icon={icon==='Haze'?'CLEAR_DAY':icon==='Clouds'?'CLOUDY':icon==='Mist'?'CLOUDY':icon==='Rain'?'RAIN':icon==='Snow'?'SNOW':icon==='Dust'?'WIND':icon==='Drizzle'?'SLEET':icon==='Fog'?'FOG':icon==='Smoke'?'FOG':icon==='Tornado'?'WIND':'CLEAR_DAY'}
          color={color}
          size={size}
          animate={animate}
        />
      </div></div>
        <div className="haze">{description}</div>
        <div className="statecountry">{statename},{countryCode}</div>
        <hr style={{width:'95%'}}/>
        <div className="contentholder">
        <div className="feelslike"><span style={{marginLeft:'13%'}}>Feels_like</span>    <span style={{marginRight:'15%'}}>{feels_like}° c</span></div>
        <hr style={{width:'85%'}} />
        <div className="cloudcoverage"><span style={{marginLeft:'13%'}}>Cloudcoverage</span>      <span  style={{marginRight:'15%'}}>{cloudcoverage}%</span></div>
        <hr style={{width:'85%',color:'grey'}}/>
        <div className="humidity"><span style={{marginLeft:'13%'}}>Humidity</span>      <span  style={{marginRight:'15%'}}>{humidity}%</span></div>
        <hr style={{width:'85%',color:'grey'}}/>
        <div className="windspeed"><span style={{marginLeft:'13%'}}>Windspeed</span>      <span  style={{marginRight:'15%'}}>{windspeed}m/sec</span></div>
        <hr style={{width:'85%',color:'grey'}}/>
        <div className="sunrise"><span style={{marginLeft:'13%'}}>Sunrise</span>      <span  style={{marginRight:'15%'}}>{(new Date(sunrise * 1000).toLocaleTimeString())}</span></div>
        <hr style={{width:'85%',color:'grey'}}/>
        <div className="sunset"><span style={{marginLeft:'13%'}}>Sunset</span>        <span  style={{marginRight:'15%'}}>{(new Date(sunset * 1000).toLocaleTimeString())}</span></div></div>    
        </div>
      </div>
    );
  }
}

export default componentName;
