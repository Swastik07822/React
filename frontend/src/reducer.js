const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: false
            }
        case "GET_DATA":
            // console.log(action.payload);
            return {
                ...state,
                data: action.payload
            }
        case "LOGIN":
            // console.log(state.isLogin);
            return {
                ...state,
                isLogin: true
            }
        case "LOGOUT":
            return {
                ...state,
                isLogin: false
            }
        default:
            return state;
    }
}

export default reducer;