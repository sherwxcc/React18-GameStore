class ProductService {
  constructor(knex) {
    this.knex = knex;
  }

  async getProductList() {
    let list = await this.knex("tblProducts");

    console.log("Matched: ", matchedUser);

    if (list) {
      return { code: 20000, list }; // User already exit
    } else {
      return { code: 10005, message: "No matching item" };
    }
  }
}

module.exports = ProductService;
