import React, { Component } from 'react';
import { BallTriangle } from  'react-loader-spinner'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center"> 
         <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="white"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
      </div>
    );
  }
}

export default Spinner;





// import React from 'react';
// import loading from './loading.gif'

// const Spinner=()=> {

//     return (
//       <div className="text-center"> 
//          <img className='my-3' src={loading} alt="loading" />
//       </div>
//     );
// }

// export default Spinner;
