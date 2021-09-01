import React, { useContext } from "react";
import { ProductContext } from "../../context/providers/productsContext";
import Hero from "./../../components/ui/Hero";
const HomePage = () => {
  const { isLoading, products } = useContext(ProductContext);
  let result = "";

  if (isLoading) {
    result = (
      <div className="d-flex h-100  justify-content-center align-items-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    result = (
      <>
        <Hero />
        <div className="row">
          {products.map(
            ({ nombre, desciption, price, quantity, images, id }) => (
              <div className="col col-sm-12 col-md-4">
                <div className="card card-body" key={id}>
                  <h1>{nombre}</h1>
                  <p>{desciption}</p>
                </div>
              </div>
            )
          )}
        </div>
      </>
    );
  }

  return <>{result}</>;
};

export default HomePage;
