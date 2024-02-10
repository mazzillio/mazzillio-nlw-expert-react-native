import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-stores";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
    const existsProduct = products.find(({ id }) => newProduct.id === id);
    if(existsProduct) {
      return products.map((product) => 
        product.id === existsProduct.id 
          ? { ...product, quantity : product.quantity + 1 }
          : product
      )
    }
    return [...products, { ...newProduct, quantity: 1}];
}