import { combineReducers } from 'redux';

const count = (count=0,action)=>{
  if(action.type === "INCREMENT"){
    return count = count + 1;
  }else if(action.type === "DECREMENT"){
    return count = count - 1;
  }else{
    return count
  }
}

export default combineReducers({
  count:count
});