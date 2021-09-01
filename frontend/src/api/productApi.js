const url = "http://localhost:4000";

const getProduct = () => {
  return fetch(`${url}/product`)
    .then((result) => result.json())
    .catch((error) => console.error("error ", error));
};

export { getProduct };
