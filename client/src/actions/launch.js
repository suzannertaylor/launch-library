import api from '../utils/api'
import {
    LAUNCH_IS_LOADING,
    LAUNCH_HAS_ERRORED,
    FETCH_LAUNCHES,
} from '../constants';


function launchHasErrored(bool) {
    return {
        type: LAUNCH_HAS_ERRORED,
        launchHasErrored: bool
    }
}

function launchIsLoading(bool) {
    return {
        type: LAUNCH_IS_LOADING,
        launchIsLoading: bool
    }
}

function fetchLaunchesSucsess(json) {
    return {
        type: FETCH_LAUNCHES,
        payload: json
    }
}

function  fetchLaunches (nextPage) {
    return (dispatch) => {
        dispatch(launchIsLoading(true))
        return api.fetchLaunches(nextPage)
            .then(launchIsLoading(false))
            .then(launches => {
                dispatch(launchHasErrored(false))
                dispatch(fetchLaunchesSucsess(launches))
            })
            .catch(error => {
                console.log(error)
                dispatch(launchHasErrored(true))
            })
    }
}

export { launchIsLoading, launchHasErrored, fetchLaunches, fetchLaunchesSucsess }