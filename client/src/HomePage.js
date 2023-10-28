import React , { useState,useEffect } from 'react'
import './App.css'
import {useVisitorContext} from "./userContext"
import { useNavigate } from 'react-router-dom'


function App() {
    const {user} = useVisitorContext();
    const [dailyImg,setDailyImg] = useState();


    const navigate = useNavigate()

    let store = {
      user : user.name,
      apod: "",
      rovers: ["Curiosity" , "Spirit" , "Opportunity"],
    };

    // //fetch the image of the day for the homepage
    useEffect(() => {
      fetch(`/apod`)
      .then(response => response.json())
      .then (data=>{
      setDailyImg(data);
      })
      .catch(error => console.log('Error'));
    },[]);

    //handle the initial greeting
    const Greeting = (name) => {
      if (name) {
          return <p>Welcome {name}!</p>
      }
      return <p>Hello!</p>;
    }

    //get the image of the day
    function ImageOfTheDay(){
    if (dailyImg.media_type === "video") {
        return (
          <div className='apod'>
              <div className='apod_text'>
                <h3> Or... check the <strong>Astronomy Video of the Day</strong></h3>
                <p>{dailyImg.explanation}</p>
              </div>
              <div className='image'>
                <p>See today's featured video <a href="${state.url}">here</a></p>
                <span><i>{dailyImg.title}</i></span>
              </div>
            </div>
      )
        } else {
        return (
          <div className='apod'>
          <div className='apod_text'>
            <h3> Or... check the <strong>Astronomy Picture of the Day</strong></h3>
            <p>{dailyImg.explanation}</p>
          </div>
          <div className='image'>
            <img src={dailyImg.url} alt="a photo of Mars"/>
            <figcaption><i>{dailyImg.title}</i></figcaption>
          </div>
        </div>
      )}
    };

return (
  <div className='container'>
    <h1>
      {Greeting(user.name)}
    </h1>
    <h2>Choose a rover and check how Mars looks!! </h2>
    <main>
      <section>
        <div className='rover_btn'>
          {store.rovers.map((rover)=>{
            return (
              <button
              key={rover}
              className='choose_btn'
              onClick = {()=>{navigate(`/rover` , {state:{rover}} )}}>
                {rover}
              </button>
          )})}
        </div>
        {typeof dailyImg=== 'undefined' ?
          <div className='loadingTime'>
            <p className='loading'>Loading...</p>
          </div>
        :
          <>
          {ImageOfTheDay()}
          </>
        }
      </section>
    </main>
  </div>
  )
}

export default App