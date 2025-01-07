import React from "react";
import { useParams } from "react-router-dom";
import { sendEmailNotification } from "../services/emailService";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    // Fetch product details based on the id
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handlePurchase = async () => {
    // Logic for handling purchase
    await sendEmailNotification(product);
    alert("Purchase successful! A confirmation email has been sent.");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='product-details'>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
};

export default Product;
