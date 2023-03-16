/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("tblProducts").del();
  await knex("tblProducts").insert([
    {
      prod_name: "PS5",
      img_url: "ps5",
      price: 5000,
      brand_id: 1,
      cat_id: 1,
      status_id: 2,
    },
    {
      prod_name: "Switch OLED",
      img_url: "switchOLED",
      price: 3000,
      brand_id: 2,
      cat_id: 1,
      status_id: 2,
    },
    {
      prod_name: "Switch LITE",
      img_url: "switchLITE",
      price: 1500,
      brand_id: 2,
      cat_id: 1,
      status_id: 2,
    },
    {
      prod_name: "Kirby and the Forgotten Land",
      img_url: "kirbyForgottenLand",
      price: 400,
      brand_id: 2,
      cat_id: 2,
      status_id: 2,
    },
    {
      prod_name: "Kirby Star Allies",
      img_url: "kirbyStarAllies",
      price: 300,
      brand_id: 2,
      cat_id: 2,
      status_id: 2,
    },
  ]);
};
