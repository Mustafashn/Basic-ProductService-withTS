import { ProductService } from "./ProductService";
import { Product } from "./Product";
let _productService = new ProductService();

let products = _productService.getProducts();
let product1 = _productService.getById(1);
console.log("Ürünler listeleniyor");
console.log(products);
console.log("------------------");
console.log("Id=1 olan ürün listeleniyor");
console.log(product1);

let newProduct = new Product();
newProduct.name = "Iphone 14";
newProduct.price = 6000;
newProduct.category = "Telefon";
_productService.saveProduct(newProduct);

products = _productService.getProducts();
console.log("Ürünler listeleniyor");

console.log(products);
