import { useEffect, useState } from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import axios from 'axios'


const Contents = () => {

    useEffect(()=>{
        const fetchEvents = async () =>{
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr");
            console.log(res);
        }
        fetchEvents()
    })

    return (
        <selection>
          <h2>국내 코로나 현황</h2>
          <div className="contents">
              {/* <div>
                  <Bar data={confirmedData} options={
                    { title : { display: true, text : "누적 확진자 추이" }},
                    { legend :{ display: true, position : "botttom" }}
                  }/>
              </div> */}
          </div>
        </selection>
    )
}

export default Contents
