export class Product {
  constructor(
    private _id?: number,
    private _name?: string,
    private _category?: string,
    private _price?: number
  ) {}

  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get category() {
    return this._category;
  }
  set category(cat) {
    this._category = cat;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
}
