products = [];
class Product {
  constructor(id, name, price, description) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._description = description;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getId() {
    return this._id;
  }
  setId(id) {
    this._id = id;
  }
  getPrice() {
    return this._price;
  }
  setPrice(price) {
    this._price = price;
  }
  getDescription() {
    return this._description;
  }
  setDescription(decription) {
    this._description = description;
  }
  static getAllProducts() {
    return products;
  }
}
products = [
  new Product(0, "Fruits", 100.0, "Amazing health benefits"),
  new Product(1, "Vigitables", 50.0, "Safe and healthy diet"),
  new Product(2, "Shoes", 200.0, "Skechers"),
  new Product(3, "Cosmotics", 100.0, "For beauty"),
];
module.exports = Product;
