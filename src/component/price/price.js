 
import './stylePrice.css';
 
function Price (props){

 //   let color = "";  
 //   console.log(props.cost);

   // color = (props.cost.change>0)?'price-green':'price-red';

    return <div className={(props.cost.change>0)?'price-green':'price-red'}>{props.cost.price}{props.cost.currency} ({props.cost.change}%)</div>
   //  return <div className={color} >=== </div>
}
export default Price


 