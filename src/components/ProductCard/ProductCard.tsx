import { Product } from '../../types/types';
import './ProductCard.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className='product-card'>
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <h6>{product.category}</h6>
      <Rating value={product.rating.rate} readOnly={true} />
      <img src={product.image} alt={product.title} className='product-image' />
      <p>{product.description}</p>
    </div>
  );
};
export default ProductCard;
