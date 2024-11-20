import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import './Profile.css'

const Profile = () => {
  let [data,setData]=useState([])
  let [curp,setcurp]=useState(1)
  let [rowp,setrowp]=useState(3)
  let indexlast=curp*rowp;
  let indexfirst=indexlast-rowp;
  let total=data.length;
  let curitem=data.slice(indexfirst,indexlast);
  let totalp=Math.ceil(total/rowp)

  let prevfun=()=>{
    if(curp == 1){
      setcurp(totalp)
    }
    else{

      setcurp((prev)=>Math.max(prev -1,1))
    }
  }
  let nextfun=()=>{
    if(curp == totalp){
      setcurp(1)
    }
    else{

      setcurp((next)=>Math.min(next+1,totalp))
    }
  }
let movefun=(page)=>{
  setcurp(page)
}

  useEffect(()=>{
    axios.get('http://localhost:3000/youtubeAllData')
    .then((res)=>{setData(res.data)})
  },[])
  return (
    <div>
      <h3>profile component</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, commodi. llam dolores animi, harum ut neque praesentium similique omnis debitis saepe modi, autem mollitia.lorem40 Totam in ullam beatae dolores nulla illum veniam doloremque voluptatum. Temporibus, nemo. Incidunt in, consequatur expedita dolorem explicabo esse dolorum eaque vitae et provident!</p>

      <div className="div  d-flex  justify-content-evenly gap-3 flex-wrap bg-body-secondary">
          {
            curitem.length > 0 && curitem.map((data,i)=>{
              return(
                <div className="div " key={i}>
                  
                    <ReactPlayer url={data.videoUrl} width={300} height={200}/>
                    <p>{data.title}</p>
                </div>
              )
            })
          }
      </div>
        <div className="video-pagination d-flex justify-content-center gap-3  mt-5">
           <button onClick={prevfun}>prev</button>
            {
              Array.from({length:totalp},(_,index)=>(
                <button  onClick={()=>movefun(index+1)}
                className={`${curp == index+1 ? 'text-bg-success':''}`}
                >{index+1}</button>
              ))
            }
             {/* disabled={curp == totalp} */}
           <button onClick={nextfun}>next</button>
        </div>
    </div>
  )
}

export default Profile
