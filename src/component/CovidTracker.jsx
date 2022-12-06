import React , {useEffect, useState} from 'react'
import './covid.css'

function CovidTracker() {
  const [info, setInfo]=useState([])
  // console.log(info)
    const getData= async()=>{
      const res = await fetch("https://data.covid19india.org/data.json")
      const data = await res.json();
      setInfo(data.statewise[0])
    }
    useEffect(()=>{
      getData() 
    },[])

    console.log(info)
   return(
    <>

      {/* <div className="container-flud my-4 mx-4">
      <div className='row'>
      <Card  name="Active" count={info.active}/>
      <Card name="Confirmed" count={info.confirmed}/>
      <Card name="Deaths" count={info.deaths}/>
      <Card name="Deltaconfirmed" count={info.deltaconfirmed}/>

      
      </div>
      </div> */}
      <h1 className='my-3'>🔴LIVE</h1>
      <h2>Covid-19 Tracker App</h2>

      <div className="container-flud data">
      <ul className='row'>
        <li className="card country">
          <div className="card_main">
            <p className="card_name"><span>Our</span>Country</p>
            <p className="card_total">INDIA</p>
          </div>
        </li>

        <li className="card recovered">
          <div className="card_main">
            <p className="card_name"><span>Total</span>Recovered</p>
            <p className="card_total">{info.recovered}</p>
          </div>
        </li>
        <li className="card confirmed">
          <div className="card_main">
            <p className="card_name"><span>Total</span>Confirmed</p>
            <p className="card_total">{info.confirmed}</p>
          </div>
        </li>
        <li className="card deaths">
          <div className="card_main">
            <p className="card_name"><span>Total</span>Deaths</p>
            <p className="card_total">{info.deaths}</p>
          </div>
        </li>
        <li className="card active">
          <div className="card_main">
            <p className="card_name"><span>Total</span>Active</p>
            <p className="card_total">{info.active}</p>
          </div>
        </li>
        <li className="card lastupdatedtime">
          <div className="card_main">
            <p className="card_name"><span>Live</span>Updated</p>
            <p className="card_total">{info.lastupdatedtime}</p>
          </div>
        </li>
      </ul>
        </div>
    </>
   )   
 
}



export default CovidTracker