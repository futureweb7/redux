import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/dynamicCounter/actions';
const DynamicCounter = () => {
   const counts = useSelector((state)=> state.dyCounter.value)
   const dispatch = useDispatch();
   const incrementHandlar = (value) =>{
        dispatch(increment(value));
   }
   const decrementHandlar = (value) =>{
    dispatch(decrement(value));
   }
    return (
        <div style={{width: "300px",margin: "10px auto", border:"3px solid #cccccc38",padding:"15px", background: "#cccccc38"}}>
           <div>
            <div style={{textAlign: "center"}}>{counts}</div>
            <div style={{display: "flex", alignItems: "center", justifyContent:"space-evenly", marginTop: "20px"}}>
              <button onClick={() =>incrementHandlar(5)}  style={{cursor: "pointer", background: "#8fbc8f", border: "none", padding: "4px 10px"}} >Incriment</button>
              <button disabled = {counts >0 ? false : true }  onClick={() =>decrementHandlar(2)}  style={{cursor: "pointer", background: "#add8e6", border: "none", padding: "4px 10px"}}>Dicriment</button>
            </div>
           </div>
        </div>
    );
};

export default DynamicCounter;