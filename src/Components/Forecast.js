import React from 'react'

function Forecast({timeday, img, weatherDesc, max, min}) {

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var day = new Date(timeday)
  var dayName = days[day.getDay()]


  return (
    <div className='individual-forecast'>
      <p>{dayName}</p>
      <img src={img} alt="Not found"/>
      <p>{weatherDesc}</p>
       {`${max}\u00b0`} / {`${min}\u00b0`}
    </div>
  )
}

export default Forecast