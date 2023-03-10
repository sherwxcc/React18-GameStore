/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("tblUsers").del();
  await knex("tblUsers").insert([
    {
      firstname: "Sherman",
      lastname: "Wong",
      username: "sherman",
      password: "123",
      admin: false,
    },
    {
      firstname: "Alice",
      lastname: "Admin",
      username: "admin",
      password: "123",
      admin: true,
    },
  ]);
};
