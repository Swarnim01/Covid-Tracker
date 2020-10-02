import React , {useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css'
const Chart = ({data:{confirmed,recovered,deaths},country}) =>{
    const [DailyData, setDailyData] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[setDailyData]);
const LineChart = (DailyData?.length?
    (
        <Line 
        data = {{
            labels:DailyData.map(({date})=>date),
            datasets:[{
                label:'Infected',
                data:DailyData.map(({confirmed})=>confirmed),
                bordercolor:'blue',
                backgroundColor:'rgba(0,0,255,0.3)',
                fill:true,
            },
            {label:'Deaths',
            data:DailyData.map(({deaths})=>deaths),
            bordercolor:'red',
            backgroundColor:'rgba(255,0,0,0.5)',
            fill:true,}]
        }}/>
    ):null)

    const BarChart = (
        confirmed?
        (<Bar 
            data = {{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options = {{
                legend:{display:false},
                title : {display:true,text:`Curremt State of ${country}`},
            }}
        />):null
    );
    return(
    <div className = {styles.container3}>{ country ? BarChart: LineChart }</div>
    )
}
export default Chart;