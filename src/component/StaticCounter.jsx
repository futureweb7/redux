import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';

const StaticCounter = () => {
  const count = useSelector((state) => state.counter.value);
  console.log("store---", count);
  const dispatch = useDispatch();
  const incrementHandlar=()=>{
    dispatch(increment());
  };
  const decrementHandlar=()=>{
    dispatch(decrement());
  }
    return (
        <div style={{width: "300px",margin: "10px auto", border:"3px solid #cccccc38",padding:"15px", background: "#cccccc38"}}>
           <div>
            <div style={{textAlign: "center"}}>{count}</div>
            <div style={{display: "flex", alignItems: "center", justifyContent:"space-evenly", marginTop: "20px"}}>
              <button onClick={incrementHandlar}  style={{cursor: "pointer", background: "#8fbc8f", border: "none", padding: "4px 10px"}} >Incriment</button>
              <button   disabled={count > 0 ? false : true} onClick={decrementHandlar} style={{cursor: "pointer", background: "#add8e6", border: "none", padding: "4px 10px"}}>Dicriment</button>
            </div>
           </div>
        </div>
    );
};

export default StaticCounter;