function getUser(userId, callback) {
    setTimeout(() => {
      callback({ id: userId, name: "John", age: 30 });
    }, 1000);
  }
  
  function getPurchases(userId, callback) {
    setTimeout(() => {
      callback([
        { id: 1, userId: userId, product: "Laptop", price: 1000 },
        { id: 2, userId: userId, product: "Phone", price: 2000 },
      ]);
    }, 1000);
  }
  
  function getProductDetails(productId, productName, productPrice, callback) {
    setTimeout(() => {
      callback({ id: productId, name: productName, price: productPrice });
    }, 1000);
  }

//Bài 1: 

getUser(1,(user) =>{
    console.log("User:",user);
    getPurchases(user.id,(purchase) =>{
        console.log("Purchases:",purchase);
        purchase.forEach((product) =>{
            getProductDetails(product.id, product.product, product.price,(productDetail) =>{
                console.log("Product Detail: ",productDetail)
            })
        })
        const total = purchase.reduce((acc, cur) =>{
            acc += cur.price
            return acc;
        },0);
        console.log("Product total: ",total);
    })
})

