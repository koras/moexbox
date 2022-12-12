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
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

 
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
/**
 * documentation 
 * @link https://www.chartjs.org/docs/latest/developers/updates.html
 * 
 */

 export function LineMiniTicker(props) {

 // const  ticker =   props.ticker;
 
  
  const options = {
 
 
  //  fill: true,
  //responsive: true,
  plugins: {
      filler: {
        propagate: true,
        drawTime:'beforeDatasetsDraw'
      },
    //  responsive: true,
     // id: 'myEventCatcher', 
      legend: {
    //   position: 'top',
        display: false,
      },
      title: {
        display: false,
      //  text: '',
      },
      subtitle: {
        display: false,
      //  text: ''
    },
    interaction: {
      intersect: false,
    },
  },
  scales: {
    y: {
        beginAtZero:  false,
        display: false,
        stacked: true
    },
    x: {
        beginAtZero: true,
        display:  false,
        stacked:  false,
    },
   
  },
  elements:{
    point:{
      radius: 0,
      hitRadius:0
    },
    line:{
      backgroundColor:'rgba(255, 159, 64, 1)'
    }
  },
  // interaction: {
  //   intersect: false,
  //   axis: 'x'
  // },
  
};




let  data = {
   // fill: true,
    labels: ["","", "","","","", "",   "",  "", "", "", "",],
    datasets: [
      {
        fill: true,
        label: '',
        data: [12, 19,  5, 2, 34, 19, 3, 5, 2,  19, 3, 5, 2, 3, 19, 3, 5, 2, 53, 19, 3, 5, 2, 3,],
      //  backgroundColor: [
      //    "rgba(255, 99, 132, 1)", 
     //   ],
    //    borderColor: [
   //       "rgba(255, 99, 132, 1)", 
   //     ],
       // borderWidth: [1],
          borderWidth: 1,
          borderColor:"rgba(209, 211, 209, 1)",
          backgroundColor:  "rgba(226,237,231, 1)",
        tension: 0.3,
      },
    ],
  };

  const chartRef = useRef('chart');
  return <div className="dashboard-chart">  <Line  ref={chartRef}  options={options} data={data}   /></div>;
}
