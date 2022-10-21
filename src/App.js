import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN


function App() {

  const url = 'https://course-api.com/react-tabs-project'
  const [getUser, setGetUser] = useState([])
  const [desc, setDesc] = useState(0)
  const [loading, setLoading] = useState(true)


    const getApi=async()=>{
      try {
        const {data} = await axios(url);
        console.log(data);
        setGetUser(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      getApi()
    
    }, [])
    if(loading){
      return(
        <section className='loading section'><h1>Loading...</h1></section>
      )
    }

  // console.log(getUser);
    
  const{company,dates,duties,title}=getUser[desc]

  return(
    <section className='section'>
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
    
      <div className="jobs-center">
        <div  className="btn-container">
          {
            getUser.map((item,index)=>{return(<button className={`job-btn ${index === desc && 'active-btn'}`} onClick={()=>setDesc(index)}>{item.company}</button>)})
          }
        </div>

      


          <article className='job-info'>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className='job-date'>{dates}</p>
              {duties.map((dut,index)=>{return(
                <div className='job-desc' key={index}><FaAngleDoubleRight className='job-icon'/> <p>{dut}</p></div>
              )})}
          </article>

          </div>
          <button className='btn' type='button'>More Info</button>

    </section>

  )
}

export default App
