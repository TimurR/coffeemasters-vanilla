import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { CartItem } from "./components/CartItem.js";
import { ProductItem } from "./components/ProductItem.js";

window.app = {
  store: Store,
  router: Router,
};

window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});

window.addEventListener("appcartchanged", (e) => {
  console.log("appcartchanged", e);
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, curr) => acc + curr.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
