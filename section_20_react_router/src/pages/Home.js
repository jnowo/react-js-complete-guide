import {Link, useNavigate} from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('products');
  }

  return (
    <>
      <h1>The Home Page</h1>
      <p>
        Go to <Link to='products'>the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Go to products</button>
      </p>
    </>
  );
}