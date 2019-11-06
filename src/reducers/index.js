import * as types from './../types';

const initialState = {
    products: [],
    stores: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_STORE:
            return { ...state };
        case types.EDIT_STORE:
            return { ...state };
        case types.REMOVE_STORE:
            return { ...state };
        case types.ADD_PRODUCT:
            return {
                ...state,
                products: [
                    ...state.products, action.payload
                ]
            };
        case types.EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) => {
                        if (product.id === action.payload.id) {
                            return action.payload;
                        }
                        return product;
                    })
                }
        case types.REMOVE_PRODUCT:
            return {
                ...state,
                products: [
                    ...state.products.filter((product) => product.id !== action.payload)
                ]
            };
        default:
            return {...state};
    }
}

export default rootReducer;
