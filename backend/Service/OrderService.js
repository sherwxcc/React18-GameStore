class OrderService {
  constructor(knex) {
    this.knex = knex;
  }

  async selectOrderAll(userId, pageOffset) {
    try {
      let orderList = await this.knex("tblOrderDetails")
        .select(
          "tblOrders.ord_id", // Order ID
          "tblOrders.order_date", // Order Date
          "tblOrderDetails.prod_id", // Product ID
          "tblProducts.prod_name", // Product name
          "tblOrderDetails.quantity", // Item quantity
          "tblBrands.brand_name", // Item brand name
          "tblOrderStatuses.status_name" // Order status
        )
        .join("tblOrders", "tblOrders.ord_id", "tblOrderDetails.ord_id")
        .join("tblProducts", "tblProducts.prod_id", "tblOrderDetails.prod_id")
        .join("tblBrands", "tblBrands.brand_id", "tblProducts.brand_id")
        .join(
          "tblOrderStatuses",
          "tblOrderStatuses.status_id",
          "tblOrders.status_id"
        )
        .where("tblOrders.user_id", userId)
        .orderBy("tblOrders.order_date", "desc")
        .limit(6)
        .offset(pageOffset);
      return orderList;
    } catch (error) {
      console.log(error);
      // return { code: 10000, message: "Something went wrong" };
    }
  }

  async countOrder(userId) {
    try {
      let orderCount = await this.knex("tblOrderDetails")
        .count("*")
        .join("tblOrders", "tblOrders.ord_id", "tblOrderDetails.ord_id")
        .where("tblOrders.user_id", userId);
      return orderCount[0]["count(*)"];
    } catch (error) {
      console.log(error);
    }
  }

  async addOrder(userId, orderList) {
    try {
      let date = new Date();
      let newOrdId = await this.knex("tblOrders")
        .insert({
          order_date: date.toISOString().slice(0, 19).replace("T", " "),
          ship_date: null,
          user_id: userId,
          status_id: 1, // Unpaid
          remark: null,
        })
        .returning("ord_id");

      for (let item of orderList) {
        await this.knex("tblOrderDetails").insert({
          ord_id: newOrdId,
          prod_id: item.prodId,
          quantity: item.quantity,
        });
      }

      return true;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = OrderService;
