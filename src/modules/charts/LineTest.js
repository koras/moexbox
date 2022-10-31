import React,{useEffect,useRef} from 'react';
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

 export function LineTest() {

  const options = {
  responsive: true,
  plugins: {
    id: 'myEventCatcher', 
    legend: {
   //   position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },

    subtitle: {
      display: false,
      text: 'Custom Chart Subtitle'
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
    console.log(items);
    console.log(items[0].index);
    console.log(chartRef.current);
    console.log(chartRef.current.data.datasets[0].data      ); 
    let   chart = chartRef.current;
    chart.data.datasets[0].data.push(123)
    chart.data.labels.push('color');
    console.log(chart    ); 
    chart.update();
    // ChartJS.update();
    }
  },
};

const data = {
  fill: true,
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets:  [{
    fill: true,
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
    tension: 0.1
}] 
};

 
  const chartRef = useRef('chart');

 

  return <Line  ref={chartRef} options={options} data={data}  
  

  
  />;
}
