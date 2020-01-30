import {
    SAVE_PROJECTS,
    LOAD_PROJECTS,
    FETCHING_PROJECTS,
    PROJECT_ERROR
} from '../actions/actions';

const initialState = {
    projects: [],
    fetchingProjects: false,
    projectError: ''
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case LOAD_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case FETCHING_PROJECTS:
            return {
                ...state,
                fetchingProjects: !state.fetchingProjects
            }
        case PROJECT_ERROR:
            return {
                ...state,
                fetchingProjects: false,
                projectError: 'ERROR: ' + action.payload
            }
        default:
            return {
                ...state
            }
    }
}