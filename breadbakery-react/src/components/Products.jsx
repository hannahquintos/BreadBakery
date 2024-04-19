import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      let response = await fetch("http://localhost:3000/api/products");
      let data = await response.json();
      setProducts(data);
    }
    getAllProducts();
  }, []);

  return (
    <div id="productsContainer">
        {
          products.map((product) => (
            <Link to={`/products/${product._id}`} key={product._id}>
                <div className="productCard">
                    <img src={product.imageURL} alt={product.productName} />
                    <h2>{product.productName}</h2>
                    <p>${product.price}</p>
                </div>
            </Link>
          ))
        }
    </div>
  );
}