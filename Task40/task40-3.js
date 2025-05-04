function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: userId, name: "John", age: 30 };
      resolve(user);
    }, 1000);
  });
}

function getPurchases(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const purchase = [
        { id: 1, userId: userId, product: "Laptop", price: 1000 },
        { id: 2, userId: userId, product: "Phone", price: 2000 },
      ];
      resolve(purchase);
    }, 1000);
  });
}

function getProductDetails(productId, productName, productPrice) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const details = { id: productId, name: productName, price: productPrice };
      resolve(details);
    }, 1000);
  });
}

async function getData() {
    try{
        const user = await getUser(1);
        console.log("User: ",user)
        const purchase = await getPurchases(user.id)
        console.log("Purchase: ",purchase)
        const total = purchase.reduce((acc, cur) =>{
            acc += cur.price
            return acc;
        },0)
        console.log("Product total: ",total)
        for await (const product of purchase ) {
            const productDetail = await getProductDetails(product.id, product.product, product.price)
            console.log("Product detail: ",productDetail)
        }
    } catch(error){
        console.error(error)
    }
}

getData()