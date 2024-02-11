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
export function remove(products: ProductCartProps[], productRemovedId: string) {
  const updatedProducts =  products.map((product)=>{
    if(product.id === productRemovedId) {
      return { ...product, quantity: product.quantity > 1 ? product.quantity -1 : 0 };
    }
    return product;
  });
  return updatedProducts.filter((product) => product.quantity > 0);
}