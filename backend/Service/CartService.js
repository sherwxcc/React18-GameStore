class CartService {
  constructor(knex) {
    this.knex = knex;
  }

  /** NOTE:  User display all cart content
   * Product name: tblProducts.prod_name
   * Product brand: tblBrands.brand_name
   * Order Qty: tblCartDetails.quantity
   * Price: tblProducts.price
   */
  async selectCartAll(userId) {
    try {
      let result = await this.knex("tblCartDetails")
        .select(
          "tblProducts.prod_id",
          "tblProducts.prod_name",
          "tblProducts.img_url",
          "tblBrands.brand_name",
          "tblCartDetails.quantity",
          "tblProducts.price"
        )
        .join("tblProducts", "tblProducts.prod_id", "tblCartDetails.prod_id")
        .join("tblBrands", "tblBrands.brand_id", "tblProducts.brand_id")
        .where("user_id", userId);
      return { code: 20000, list: result };
    } catch (error) {
      console.log(error);
      return { code: 10000, message: "Something went wrong" };
    }
  }

  async checkCartItem(userId, prodId) {
    try {
      let result = await this.knex("tblCartDetails")
        .select("quantity")
        .where("user_id", userId)
        .andWhere("prod_id", prodId);
      return result[0]?.quantity;
    } catch (error) {
      console.log(error);
      return { code: 10000, message: "Something went wrong" };
    }
  }

  // NOTE: User add new product to the cart
  async insertCartItem(userId, prodId) {
    try {
      await this.knex("tblCartDetails").insert({
        user_id: userId,
        prod_id: prodId,
        quantity: 1,
      });
      return { code: 20000, message: "Added new item" };
    } catch (error) {
      console.log(error);
      return { code: 10000, message: "Something went wrong" };
    }
  }

  // NOTE: User update product qty
  async updateCartItem(userId, prodId, quantity) {
    console.log("NEW QTY: ", quantity);
    try {
      await this.knex("tblCartDetails")
        .where("user_id", userId)
        .andWhere("prod_id", prodId)
        .update("quantity", quantity);
      return { code: 20000, message: "Updated cart" };
    } catch (error) {
      console.log(error);
      return { code: 10000, message: "Something went wrong" };
    }
  }

  // NOTE: User delete product from the cart
  async deleteCartItem(userId, prodId) {
    try {
      await this.knex("tblCartDetails")
        .where("user_id", userId)
        .andWhere("prod_id", prodId)
        .del();
      return { code: 20000, message: "Deleted item" };
    } catch (error) {
      return { code: 10000, message: "Something went wrong" };
    }
  }

  // NOTE: User clear the whole cart
  async deleteCartAll(userId) {
    try {
      await this.knex("tblCartDetails").where("user_id", userId).del();
      return { code: 20000, message: "Cleared cart" };
    } catch (error) {
      console.log(error);
      return { code: 10000, message: "Something went wrong" };
    }
  }
}

module.exports = CartService;
