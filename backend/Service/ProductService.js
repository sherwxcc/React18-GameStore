class ProductService {
  constructor(knex) {
    this.knex = knex;
  }

  async getProductList() {
    let list = await this.knex("tblProducts");

    if (list) {
      return { code: 20000, list }; // Matched product
    } else {
      return { code: 10005, message: "No matching item" };
    }
  }
}

module.exports = ProductService;
