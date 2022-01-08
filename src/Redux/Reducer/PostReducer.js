const initialState = [ 
    
];

function postReducer(state = initialState, action ) {
    switch (action.type) {
        case "ADD_POST":
            state = [
                action.payload,
                ...state
            ]
            return state;

        case "UPDATE_POST":

            const updatePost = state.map(e => e.id === action.payload.id ? action.payload : e)
            state = updatePost
            return state;
            
        case "DELETE_POST": 
            
            const deletePost = state.filter(e => e.id === action.payload ? null : e)
            state = deletePost
            return state;

        default:
           return state;
    }
}


export default postReducer