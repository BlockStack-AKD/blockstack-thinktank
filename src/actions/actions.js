import { UserSession } from "blockstack";
import { appConfig } from "../config/constants";

const userSession = new UserSession({appConfig});

export const SAVE_PROJECTS = "SAVE_PROJECTS";
export const LOAD_PROJECTS = "LOAD_PROJECTS";
export const FETCHING_PROJECTS = "FETCHING_PROJECTS";
export const PROJECT_ERROR = "PROJECT_ERROR";

export const saveProjects = (projects, project) => {

    let tempProjs = projects;

    tempProjs.unshift(project);

    const options = { encrypt: false}
    const putFile = userSession.putFile('testing.json', JSON.stringify(projects), options)
    return dispatch => {
        dispatch({ type: FETCHING_PROJECTS });
        putFile
            .then((response) => {
                dispatch({ type: SAVE_PROJECTS, payload: response });
                dispatch({ type: FETCHING_PROJECTS });
            })
            .catch((err) => {
                console.log(err);
                dispatch({type: PROJECT_ERROR, payload: err});
            })
    }
}

export const loadProjects = () => {
    const options = { decrypt: false }
    const getFile = userSession.getFile('testing.json', options)
    return dispatch => {
        dispatch({ type: FETCHING_PROJECTS });
        getFile
            .then((response) => {
                dispatch({ type: LOAD_PROJECTS, payload: response})
                dispatch({ type: FETCHING_PROJECTS })
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: PROJECT_ERROR, payload: err})
            })
    }
    
}