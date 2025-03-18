import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../types/types';

type ProductAction =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'SET_SELECTED_CATEGORY'; payload: string };

interface ProductState {
  products: Product[];
  selectedCategory: string;
  dispatch?: React.Dispatch<ProductAction>;
}

// const [name, setName] = useState("")
// Initial state
const initialState: ProductState = {
  products: [],
  selectedCategory: '',
};

// Reducer function
const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// const [name, setName] = useState("")
// Create Context
// interface ProductContextType extends ProductState{
//   dispatch: React.Dispatch<ProductAction>;
// }

const ProductContext = createContext<ProductState | undefined>(undefined);

// Provider component
interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for accessing the context
export const useProductContext = (): ProductState => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
