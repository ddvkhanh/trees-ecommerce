import { ADD_ITEM, INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, DELETE_ORDER, CONFIRM_ORDER } from '../actions/types';

const initialState = {
    items: [],

}

export default function (state = initialState, action) {
    switch (action.type) {
        //nhan duoc type,change state base on type
        case ADD_ITEM:
            // console.log(action.payload);
            const findItem = state.items.find(i => i.id == action.payload.id);
            // console.log(findItem);
            
            if (!findItem) {
                action.payload.quantity = 1;
                return {
                    ...state,
                    items: [...state.items, action.payload] //sau do se thay doi data trong store (initialState)
                }
            } else {
                const newState = state.items.map(i => {
                    if(i.id==action.payload.id){
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                });

                return {
                    items: newState
                }
            }



        case INCREASE_ITEM:
            return {

            }

        case DECREASE_ITEM:
            return {

            }

        case REMOVE_ITEM:
            return {

            }

        case DELETE_ORDER:
            return {

            }

        case CONFIRM_ORDER:
            return {

            }
        default:
            return state;
    }
}