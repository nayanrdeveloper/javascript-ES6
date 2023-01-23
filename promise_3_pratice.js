const cart = ["grapes", "Apple", "Banana", "Orange"];

const promise = createOrder(cart);

promise.then((result) => {
  proceedToPayment(result);
});

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!cart) {
      const err = new Error("Not validate Cart");
      reject(err);
    }
    // resolve issue
    const orderId = "123456";
    if (orderId) {
      resolve(orderId);
    }
  });
}
