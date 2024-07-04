import axiosAPI from "../utils/axiosHelper";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosAPI.get("/api/products/getAllProducts").then((res) => {
      console.log("Res", res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Welcome to the app!</h1>
      {data && (
        <ul>
          {data.map((product: any) => (
            <div className="mb-2 p-2">
              <p key={product.id}>Name: {product.name}</p>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Welcome;
