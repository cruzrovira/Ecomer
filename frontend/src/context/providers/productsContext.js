import { createContext, useEffect, useReducer } from "react";
import { getProduct } from "../../api/productApi";
import { ProductActions } from "../actions/productActions";
import { inicialState, productReducer } from "../reducer/productReducer";

const ProductContext = createContext(inicialState);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, inicialState);

  const loadProduct = () => {
    dispatch({ type: ProductActions.LOAD_PRODUCTS });

    getProduct()
      .then((data) => {
        dispatch({ type: ProductActions.LOAD_PRODUCTS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({
          type: ProductActions.LOAD_PRODUCTS_ERROR,
          error: "Error al cargar los datos",
        });
      });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
