import { TEST_VALUE } from "../ActionTypes";

const initialState = {
    testvalue:null
};

export default function testReducer(state = initialState,action){
    switch(action.type){
        case TEST_VALUE:{
            return{
                ...state,
                testvalue:action.data
            }
        }
        default : return{
            state
        }
    }
}