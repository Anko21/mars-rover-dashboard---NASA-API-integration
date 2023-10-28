
import React from 'react'

function RoverAllData({imgData, roverName, roversData , setFilterSelected, filterSelected}){
    const Immutable = require('immutable')
//manipulating all data retrieved from APIand display on screen
    function roverDataDisplay(){
    
        const imgArrayOriginal = imgData.map((elem)=>{
            return(
              {
              camera :{
                full_name : elem.camera.full_name ,
                id: elem.camera.id
              },
              earth_date:elem.earth_date,
              img_src:elem.img_src,
              })
          });
    
          const imgList = Immutable.List(imgArrayOriginal);
    
          const filters = (selectedName)=>{
            if (selectedName === "All"){
                return imgList;
            } else if (selectedName === "Most recent"){
              const recentImgList = Immutable.List(imgList
                .sort((a,b)=>{return a.earth_date-b.earth_date})
                .slice(0,25))
                return recentImgList;
            } else {
              const byCameraImgList = Immutable.List(imgList
                .filter(img=> img.camera.full_name == selectedName))
                return byCameraImgList;
            }
          };

          
        for(let i=0; i < roversData.length; i++){
        if (roverName === roversData[i].name.toLowerCase()){
            return (
            <div className='rover'>
                <div className="rover_data">
                  <h1 className="title">{roversData[i].name}</h1>
                  <p>Landing date : {roversData[i].landing_date}</p>
                  <p>Launch date : {roversData[i].launch_date}</p>
                  <p>Status : {roversData[i].status}</p>
                </div>
                <div className="filter">
                <div >Filters</div>
                    <select
                    name="camera"
                    value={filterSelected}
                    onChange={(e)=>setFilterSelected(e.target.value)}
                    onClick={()=>filters(filterSelected)}
                    >
                    <option value="All" >All</option>
                    <option value="Most recent">Most recent</option>
                    {roversData[i].cameras.map(elem=>{
                        return (
                        <option
                            key = {elem.full_name}
                            value= {elem.full_name}
                            >
                            {elem.full_name}
                        </option>)
                        })}
                    </select>
                </div>
                <div className="gallery">
                {filters(filterSelected).map((img) => {
                    return(
                    <div key={img.img_src}>
                    <figcaption>Photo taken on the {img.earth_date}</figcaption>
                    <img
                        src={img.img_src}
                        className="gallery-img "
                        alt="photo of Mars taken by the selected rover"
                    />
                    </div>
                    )
                })}
                </div>
            </div>
            )
        }}
    }
  return(
    <>
      <div>
        {roverDataDisplay()}
      </div>
    </>
  )
}

  export default RoverAllData;