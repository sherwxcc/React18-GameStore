export const formatPrice = (price) => {
  price = Number(price);
  return price.toFixed(2).toLocaleString("en-US");
};
