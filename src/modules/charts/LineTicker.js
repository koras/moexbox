import React,{useRef} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


import { instrument } from "../../stories/storeInstrument";

//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
/**
 * documentation 
 * @link https://www.chartjs.org/docs/latest/developers/updates.html
 * 
 */

 export function LineTicker(props) {

  const  ticker =   props.ticker;
 
  
  const options = {
  responsive: true,
  plugins: {
    id: 'myEventCatcher', 
    legend: {
   //   position: 'top',
    },
    title: {
      display: false,
      text: '',
    },
    subtitle: {
      display: false,
      text: ''
  }



  },
  scales: {
    y: {
        beginAtZero: true
    }
  },
  elements:{
    point:{
      radius: 4,
      hitRadius:4
    },
    line:{
      backgroundColor:'rgba(255, 159, 64, 1)'
    }
  },
  interaction:{
    mode: 'index',
  },
  
  events: ['mousemove', 'mouseout', 'click'],

  onClick : (event, items) =>{
    if(items && items[0]){ 
  //  console.log(items);
  //  console.log(items[0].index);
  //  console.log(chartRef.current);
  //  console.log(chartRef.current.data.datasets[0].data      ); 
    let   chart = chartRef.current;
    chart.data.datasets[0].data.push(123)
    chart.data.labels.push('color');

   // console.log(chart.options ); 
  //  console.log(chart.options.elements.line.borderDash.push(3) ); 
   // chart.options.scales[2].title='asdasd'

    console.log(chart    ); 
    chart.update();
    // ChartJS.update();
    }
  },
};

 

  let  data = instrument.getChart(ticker);
 
  const chartRef = useRef('chart');

 

  return <Line  ref={chartRef} options={options} data={data}  
  

  
  />;
}
