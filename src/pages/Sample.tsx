import useRefresh from "../components/refresh";
import { Product } from "../models/Product";
// import axiosAPI from "../utils/axiosHelper";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Sample = () => {
  const [productInfo, setProductInfo] = useState<Product | null>(null);
  const refreshOnClick = useRefresh();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const controller = new AbortController();

    const getUserInfo = async () => {
      try {
        axiosPrivate
          .get("api/products/getProductById/1", {
            signal: controller.signal,
          })
          .then((res) => {
            console.log("Res", res.data);
            setProductInfo(res.data);
          });
      } catch (error) {
        console.log(controller.signal.aborted);
      }
    };

    getUserInfo();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Welcome to the app!</h1>
      {productInfo && (
        <>
          <ul>
            <div className="mb-2 p-2">
              <p key={productInfo.id}>Name: {productInfo.name}</p>
              <p>Description: {productInfo.description}</p>
              <p>Price: {productInfo.price}</p>
              <p>Stock: {productInfo.stock}</p>
            </div>
          </ul>
          <button onClick={() => refreshOnClick()}>Refresh Token</button>
        </>
      )}
    </div>
  );
};

export default Sample;
