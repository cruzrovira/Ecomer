import { ProductActions } from "../actions/productActions";
const inicialState = {
  isLoading: false,
  products: [],
  errorMessage: "",
};

const productReducer = (state, actions) => {
  switch (actions.type) {
    case ProductActions.LOAD_PRODUCTS:
      return { ...state, isLoading: true };
    case ProductActions.LOAD_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: actions.payload };
    case ProductActions.LOAD_PRODUCTS_ERROR:
      return { ...state, isLoading: false, errorMessage: actions.error };
    default:
      return state;
  }
};

export { inicialState, productReducer };
