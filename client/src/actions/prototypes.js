import * as api from '../api';


//action creators
export const getPrototypes = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchPrototypes();
        dispatch({ type : 'FETCH_ALL', payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPrototype = (prototype) => async (dispatch) =>{
    try {
        const {data} = await api.createPrototype(prototype);
        dispatch ({type : 'CREATE', payload : data});
    } catch (error) {
          console.log(error.message)   ;
    }
}