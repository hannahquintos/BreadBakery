import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function singleProduct() {
  const [product, setProduct] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      let response = await fetch(`http://localhost:3000/api/products/${params.id}`);
      let data = await response.json();
      setProduct(data);
    }
    // console.log("params:" + params.id);
    
    getSingleProduct(params.id);
  }, []);

  return (
    <div className="productDetailsContainer">
        <div className="imgContainer">
          <img src={product.imageURL} alt={product.productName} />
        </div>
        <div>
            <h1>{product.productName}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <div className="btn">
                <Link to="/Locations" className="button-link">Find a Bakery</Link>
            </div>
        </div>
    </div>
  );
}