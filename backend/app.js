const express = require("express");
const app = express();

// Setup middlewares
const cors = require("cors");
app.use(cors());
const helmet = require("helmet");
app.use(helmet());
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup knex with postgreSQL database
const knexConfig = require("./database/knexfile").development;
const knex = require("knex")(knexConfig);

// Setup passport
const auth = require("./authentication/passport")(knex);
app.use(auth.initialize());

// Setup auth service and router
const AuthService = require("./Service/AuthService");
const AuthRouter = require("./Router/AuthRouter");
const authService = new AuthService(knex);
const authRouter = new AuthRouter(authService);

// Setup cart service and router
const CartService = require("./Service/CartService");
const CartRouter = require("./Router/CartRouter");
const cartService = new CartService(knex);
const cartRouter = new CartRouter(cartService);

// Setup order service and router
const OrderService = require("./Service/OrderService");
const OrderRouter = require("./Router/OrderRouter");
const orderService = new OrderService(knex);
const orderRouter = new OrderRouter(orderService);

// Setup product service and router
const ProductService = require("./Service/ProductService");
const ProductRouter = require("./Router/ProductRouter");
const productService = new ProductService(knex);
const productRouter = new ProductRouter(productService);

app.use("/user", authRouter.router());
app.use("/cart", auth.authenticate(), cartRouter.router());
app.use("/order", auth.authenticate(), orderRouter.router());
app.use("/product", productRouter.router());

// Set up port
const port = 8080;
app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});

module.exports = app;
