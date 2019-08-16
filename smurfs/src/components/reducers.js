import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from './actions';


const initialState = {
    smurfs:[],
    form: {
        name: "",
        age: "",
        height:""
    },
    isLoading: false,
    error: null,

}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS_START:
            return{
                ...state,
                error: '',
                isLoading: true

            };
        case FETCH_SMURFS_SUCCESS:
            return{
                ...state,
                error: "",
                isLoading: false,
                smurfs: action.payload
            }
        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                error: action.payload,
                isLoading: false

            }

        default:
            return state;
    }
};
export default reducer;


