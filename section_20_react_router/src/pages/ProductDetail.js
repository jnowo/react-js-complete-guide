import {Link, useParams} from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>The Product Detail Page</h1>
      <p>{params.productId}</p>
      <p><Link to='..' relative='path'>Back</Link></p>
    </>
  );

}