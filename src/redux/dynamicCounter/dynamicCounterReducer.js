import { DYDECREMENT, DYINCREMENT } from "./actionType";

const initState={
    value: 0 ,
}

const dynamicCounterReducer = (state = initState, action) => {
       switch (action.type) {
        case DYINCREMENT:
            return{
                ...state,
                value: state.value + action.payload,
            };
        case DYDECREMENT:
            return{
                ...state,
                value: state.value -action.payload,
            };    
        default:
            return state;
       }
};

export default dynamicCounterReducer;