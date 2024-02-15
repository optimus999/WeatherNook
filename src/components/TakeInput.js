import React, { Component } from 'react';
import '../App.css';
import Spinner from './Spinner';
import Time from './Time'
import Info from './Info'


class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      weatherData:null,
      countryData:null,
      getinfo:false,
      loading:false,
      error:false,
      
      icon: "CLEAR_DAY",
      color: "white",
      size: 130,
      animate: true,
    };
  }

  handleLatitudeChange = (event) => {
    this.setState({ latitude: event.target.value });
  }

  handleLongitudeChange = (event) => {
    this.setState({ longitude: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({getinfo:true,loading:true})
    this.fetchWeatherData();
      this.fetchcountryData();
  }
  componentDidMount() {
    //Check if browser supports geolocation
    this.getLocation();
  }


  
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.handleSuccess,
        this.handleError
      );
    } else {
      this.setState({ error: 'Geolocation is not supported' });
    }
  }

  handleSuccess = (position) => {
 
    console.log(position);
    const { latitude, longitude } = position.coords;
    this.setState({ latitude, longitude, error: null });        
  }
  handleError = (error) => {
    this.setState({ error: error.message });
  }


  fetchcountryData=()=>{
    
    fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=K0H0FCG38M1E&format=json&by=position&lat=${this.state.latitude}&lng=${this.state.longitude}`)
      .then(response1 => response1.json())
      .then(data1 => {
        
        this.setState({ countryData: data1, loading:false,error:false});
      })
      .catch(error => {
        this.setState({error:true})
        console.log('Error fetching country data:', error);
      });
      
  };

  fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=ae728f3d92556cfc08c0f16771f24c98`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
          
        this.setState({ weatherData: data});
      })
      .catch(error => {
        this.setState({error:true})
        console.log('Error fetching weather data:', error);
      });
    };
  render() {
    const { latitude, longitude} = this.state;  
    return (
      <div>
      
         <div className="header">
            <h1 className="heading"><span style={{color:'white'}}>Climate</span><span className="red-text">Connect</span></h1>
         </div>

{/* 
         <div >
         <marquee behavior="scroll" direction="left" style={{fontfamily:'roboto',fontWeight:'700',color:'white'}} scrollamount="15">Welcome to Climate<span className="red-text">Connect</span> Weather. Plan your activities with our accurate weather predictions and climate insights. Check the weather of your area below. </marquee>
         </div> */}


        <div className='mainbox'>
           <form onSubmit={this.handleSubmit}>
             <div className="input-container">
               <h2 className='h2'>Enter Coordinates</h2>
               <input type="text" placeholder="Latitude" id="latitude-input" value={latitude} onChange={this.handleLatitudeChange} required/>
               <input type="text" placeholder="Longitude" id="longitude-input" value={longitude} onChange={this.handleLongitudeChange} required/>
               <input type="submit" value="Get info" className='box'/>
             </div>            
           </form>
        </div>   


      <div className="container">
      {/* {this.state.error&&<p>Oops,Sorry we Couldn't get the data of your location.</p>} */}
        {(this.state.getinfo&&this.state.loading&&<Spinner/>)}
      {/* {this.state.getinfo&&!this.state.loading&&<WeatherItem 
       name={this.state.weatherData?.name}
       country={this.state.countryData?.countryName} 
       region={this.state.countryData?.regionName}     
       description={this.state.weatherData?.weather[0]?.description}
       main={this.state.weatherData?.weather[0]?.main}
       
       feels_like={this.state.weatherData?.main?.feels_like-273}
       cloudcoverage={this.state.weatherData?.clouds?.all}
       temp_min={this.state.weatherData?.main?.temp_min-273}
       temp_max={this.state.weatherData?.main?.temp_max-273}
       humidity={this.state.weatherData?.main?.humidity}
       sunrise={this.state.weatherData?.sys?.sunrise}
       sunset={this.state.weatherData?.sys?.sunset}
       windspeed={this.state.weatherData?.wind?.speed}
       formattedtime={this.state.countryData?.formatted}
       />} */}


       {this.state.getinfo&&!this.state.loading&&<Time 
       countryCode={this.state.countryData?.countryCode} 
       statename={this.state.countryData?.cityName} 
       temp={Math.round(this.state.weatherData?.main?.temp-273)}
       />}


       {this.state.getinfo&&!this.state.loading&&<Info 
       countryCode={this.state.countryData?.countryCode}
       statename={this.state.countryData?.regionName}
       description={this.state.weatherData?.weather[0]?.description}
       feels_like={Math.round(this.state.weatherData?.main?.feels_like-273)}
       cloudcoverage={this.state.weatherData?.clouds?.all}
       humidity={this.state.weatherData?.main?.humidity}
       windspeed={this.state.weatherData?.wind?.speed}
       sunrise={this.state.weatherData?.sys?.sunrise}
       sunset={this.state.weatherData?.sys?.sunset}

       icon={this.state.weatherData?.weather[0]?.main}
       color={this.state.color}
       size={this.state.size}
       animate={this.state.animate}
       />}
       
      </div>
      </div>
    );
  }
} 

export default componentName;
