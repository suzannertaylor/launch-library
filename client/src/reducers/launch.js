import {
    LAUNCH_IS_LOADING,
    LAUNCH_HAS_ERRORED,
    FETCH_LAUNCHES,
} from '../constants';

const initialState = {
    launches: []
}
export default function blog(state = initialState, action) {
    switch (action.type) {
        case LAUNCH_HAS_ERRORED:
            return {
                ...state, launchtHasErrored: action.launchtHasErrored
            };

        case LAUNCH_IS_LOADING:
            return action.launchIsLoading;

        case FETCH_LAUNCHES:
            return {
                ...state, launches: action.payload
            };
            
        default:
            return state;
    }
};