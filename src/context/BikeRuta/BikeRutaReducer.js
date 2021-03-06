// ./client/context/bikeRutaReducer.js

const reducer = (globalState, action) => {
    
    switch (action.type) {

        case 'GET_BIKERUTA':
        case 'UPDATE_BIKERUTA': 
            return {
                ...globalState,
                singleBikeRuta: action.payload
            }
    
        case 'GET_BIKESRUTA':
            return {
                ...globalState,
                bikesRuta: action.payload
            }
        
        default: 
        return globalState
    }
}

export default reducer