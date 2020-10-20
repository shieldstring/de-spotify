export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // remove after finished developing...
    token: "BQALNyJ5hGTwaNb4Vi1gwrHWIED4aalgmlvjz_kuls6-efuxAj7XrXTMC_wqN1JhNgu3041JrRNVKWsC3ufnUP61GcMJQ6HNJUtFATgxjWLCalpOkhUtpRbr0XwxVtR3o1p5bSE-sx1-CVAd0keNZHzflZGQ_flX",
};

const reducer = (state, action) =>{
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                user: action.token,
            }

         
            default:
                return state;
    }

}

export default reducer;