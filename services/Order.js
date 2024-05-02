import { getProductById } from "./Menu.js";

export async function addToCard(id) {
  const product = await getProductById(id);
  const results = app.store.cart.filter(
    (productCart) => productCart.product.id == id
  );
  if (results.length) {
    //The product is already in the cart
    // update the current item
    console.log(results);
    app.store.cart = app.store.cart.map((p) =>
      p.product.id == id ? { ...p, quantity: ++p.quantity } : p
    );
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
  console.log("app.store.cart", app.store.cart);
}

export function removeFromCart(id) {
  app.store.cart = app.store.cart.filter((p) => p.product.id != id);
}
