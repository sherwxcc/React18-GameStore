import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import SvgIcon from "@mui/material/SvgIcon";

export const leftNavbarItems = [
  {
    id: 0,
    label: "Products",
    route: "/product",
  },
  {
    id: 1,
    label: "Policy",
    route: "/policy",
  },
];

export const rightNavbarItems = [
  {
    id: 0,
    icon: <LanguageIcon />,
    label: "Lang",
  },
  {
    id: 1,
    icon: <ShoppingCartIcon />,
    label: "Cart",
    route: "/cart",
  },
];
