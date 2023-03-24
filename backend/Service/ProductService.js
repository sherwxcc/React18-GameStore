class ProductService {
  constructor(knex) {
    this.knex = knex;
  }

  async getProductDetail(prodId) {
    let detail = await this.knex
      .select(
        "tblProducts.prod_id",
        "tblProducts.prod_name",
        "tblProducts.img_url",
        "tblProducts.price",
        "tblBrands.brand_name",
        "tblCategories.cat_name"
      )
      .from("tblProducts")
      .join("tblBrands", "tblProducts.brand_id", "tblBrands.brand_id")
      .join("tblCategories", "tblProducts.cat_id", "tblCategories.cat_id")
      .where("prod_id", prodId);
    if (detail[0]) {
      console.log("DETAIL: ", detail);
      return { code: 20000, detail: detail[0] }; // Product detail
    } else {
      return { code: 10006, message: "Item not found" };
    }
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
