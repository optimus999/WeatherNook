import React, { Component } from 'react';
import '../App.css';

class componentName extends Component {
  // componentDidMount(){                         // eslint-disable-next-line
  //   {setInterval(this.updateClock,1000)};
  // }
  componentDidMount() {
    this.updateClock(); // Call the updateClock function immediately
    
    // Use arrow function to bind 'this' to the updateClock method
    this.interval = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval when the component is unmounted
  }
  updateClock() {
        let a=new Date();
        let h=a.getHours();
        let m=a.getMinutes();
        let s=a.getSeconds();
        let day=a.getDay();
        let d=a.getDate();
        let month = a.getMonth()
        let year=a.getFullYear();
        let arrayday=["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
        let arraymonth=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let x= document.getElementById('clock');
        x.innerHTML=`<b>${h}:${m}:${s}</b>`;
        let x2=document.getElementById("week");
        x2.innerHTML=`<b>${arrayday[day]}. ${d} ${arraymonth[month]} ${year}</b>`;
  }
  render() {
    let {temp,statename,countryCode}=this.props;
    return (
      <div> 

        <div className='maindiv'>

          <div className="place">
          <div className='placename'>{statename}</div><br/>
          <div className='countrycode'>{countryCode}</div>
          </div>

          <div className='cont'>
          <div id="clock"></div>   
          <div id="week"></div>
          {/* <div id='temp'>32°<span id='c'>C</span></div>   */}
          <div id="temp">{temp}°<span id='c'>C</span></div>
          
          </div>

        </div>


      </div>
      
    );
  }
}

export default componentName;
