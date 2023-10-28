import { useState , useEffect} from "react"
import React from 'react'
import { useLocation } from "react-router-dom"
import RoverAllData from './RoverAllData'

//handling all API calls and state

function Rover() {

  const location= useLocation();

// general info about rovers retrieved from API call
  const [roversData,setRoversData] = useState()

// image data for each & every rover retrieved from API call
  const [imgData,setImgData] = useState()

  const [filterSelected,setFilterSelected] = useState("All")
  const roverName = location.state.rover.toLowerCase()

 //fetch general info about rovers (name,landing_date etc)
  useEffect( () => {
    fetch(`/rover`)
    .then(response => response.json())
    .then (data=>{
    setRoversData(data.rovers);
    })
    .catch(error => console.log('Error'));
  },[]);

 //fetch image data for each & every rover (img_source, earth_date)
  useEffect( () => {
  fetch(`/${roverName}`)
  .then(response => response.json())
  .then (data=>{
  setImgData(data.photos);
  })
  .catch(error => console.log('Error'));
  },[]);

return (
  <div className="rover_container">
    {typeof imgData=== 'undefined' ?
      <div className='loadingTime'>
        <p className='loading'>Loading...</p>
      </div>
      :
      <>
        <RoverAllData
        imgData={imgData}
        roverName={roverName}
        roversData = {roversData}
        filterSelected={filterSelected}
        setFilterSelected={setFilterSelected}
        />
      </>
    }
  </div>
  )
}

export default Rover;