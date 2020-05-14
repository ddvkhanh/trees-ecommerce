import { ADD_ITEM, INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, DELETE_ORDER, CONFIRM_ORDER } from './types';
import axios from 'axios';

export const addItem = (item) => dispatch => {
    console.log("item",item)
    //dispatch type and data -> reducer
   
        dispatch({
            type: ADD_ITEM, //key
            payload: item //value
        });
}



