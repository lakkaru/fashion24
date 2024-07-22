import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavIcons({ icon }) {
    switch (icon) {
      case "ShoppingCartIcon":
        return <ShoppingCartIcon />;
      default:
        return;
    }
}
