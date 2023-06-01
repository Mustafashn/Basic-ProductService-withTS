import { Product } from "./Product";

export class SimpleDataSource {
  private products: Array<Product>;
  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Samsung S5", "Telefon", 1000),
      new Product(2, "Samsung S6", "Telefon", 1250),
      new Product(3, "Iphone 11", "Telefon", 1600),
      new Product(4, "Iphone 12", "Telefon", 2000),
      new Product(5, "Iphone 13", "Telefon", 2400)
    );
  }
  getProducts(): Product[] {
    return this.products;
  }
}
