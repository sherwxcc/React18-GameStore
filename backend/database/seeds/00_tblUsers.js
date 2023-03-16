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
      password: "$2b$10$8sIEOC3OU1IXJpOeqEz0wONGbglwYVA07Cz00G3kqR2t11kcN6Naa",
      admin: false,
    },
    {
      firstname: "Will",
      lastname: "Byers",
      username: "will",
      password: "$2b$10$8sIEOC3OU1IXJpOeqEz0wONGbglwYVA07Cz00G3kqR2t11kcN6Naa",
      admin: false,
    },
    {
      firstname: "Dustin",
      lastname: "Henderson",
      username: "dustin",
      password: "$2b$10$8sIEOC3OU1IXJpOeqEz0wONGbglwYVA07Cz00G3kqR2t11kcN6Naa",
      admin: false,
    },
  ]);
};
