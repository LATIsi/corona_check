import { Bar, Doughnut, Line } from 'react-chartjs-2'
import axios from 'axios'
import React, { useState,useEffect } from 'react';


const Contents = () => {

    const [confirmedData, setConfirmed] = useState({   });
    const [quarantineData, setQuarantine] = useState({   });
    const [conmparedData, setConmpared] = useState({   });

    const options = {
        plugins: {
          title: { display: true, text: "누적 확진자 추이", fontSize: 16 },
          legend: { display: true, position: "bottom" },
        },
      };
      const options2 = {
        plugins: {
          title: { display: true, text: "월별 격리자 현황", fontSize: 16 },
          legend: { display: true, position: "bottom" },
        },
      };
      const options3 = {
        plugins: {
          title: { display: true, text: `누적, 확진, 해제, 사망(${new Date().getMonth+1}월)`, fontSize: 16 },
          legend: { display: true, position: "bottom" },
        },
      };

    useEffect(()=>{
        const fetchEvents = async () =>{
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr");
            console.log(res);
            makeDate(res.data);
        }

        const makeDate =   (items) =>{
            items.forEach(item => console.log(item))
            const arr = items.reduce((acc,cur)=>{
                const currentDate = new Date(cur.Date);
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();
                const confirmed = cur.Confirmed;
                const active = cur.Active;
                const death = cur.Deaths;
                const recovered = cur.Recovered;

                const findItem = acc.find( b =>{
                    return b.year === year && b.month === month;
                });

                if(!findItem){
                    acc.push(
                        {year, month, date, confirmed, active, death, recovered}
                    );
                }if(findItem && findItem.date < date){
                    findItem.active = active;
                    findItem.death = death;
                    findItem.date = date;
                    findItem.year = year;
                    findItem.month = month;
                    findItem.recovered = recovered;
                    findItem.confirmed = confirmed;
                }
                return acc;
            }, {})

            const labels= arr.map(a=> `${a.month+1}월`);
            setConfirmed({
                labels,
                datasets : [{
                    label:"국내 누적 확진자",
                    backgroundColor: "salmon",
                    fill:true,
                    data:arr.map(a=>a.confirmed)
                },]
            });

            setQuarantine({
                labels,
                datasets : [{
                    label:"월별 격리자 현황",
                    borderColor: "salmon",
                    fill:false,
                    data:arr.map(a=>a.active)
                },]
            });

            const last = arr[arr.length -1 ];
            setConmpared({
                labels:["확진자","격리해제","사망"],
                datasets : [{
                    label:"누적 확진, 해제, 사망 비율",
                    backgroundColor: ["#ff3d67","#059bff","#ff3d67"],
                    fill:false,
                    data:[last.confirmed, last.recovered, last.death]
                }]
            });
        }

        fetchEvents()
    })

    return (
        <selection>
          <h2>국내 코로나 현황</h2>
          <div className="contents">
              <div>
                  <Bar data={confirmedData} options={options}/>
              </div>
              <div>
                  <Line data={quarantineData} options={options2}/>
              </div>
              <div>
                  <Doughnut data={conmparedData} options={options3}/>
              </div>
          </div>
        </selection>
    )
}

export default Contents
