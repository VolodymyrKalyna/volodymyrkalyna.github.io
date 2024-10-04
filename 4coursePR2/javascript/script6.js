let products = [
    {
        productId: 1,
        name: "Ноутбук",
        price: 1100
    },
    {
        productId: 2,
        name: "Телефон",
        price: 2600
    },
    {
        productId: 3,
        name: "Навушники",
        price: 700
    }
]

let purchases = [
    {
        purchaseId: 1,
        productId: 1,
        quantity: 25
    },
    {
        purchaseId: 2,
        productId: 1,
        quantity: 30
    },
    {
        purchaseId: 3,
        productId: 1,
        quantity: 15
    },
    {
        purchaseId: 4,
        productId: 2,
        quantity: 40
    },
    {
        purchaseId: 5,
        productId: 2,
        quantity: 22
    },
    {
        purchaseId: 6,
        productId: 3,
        quantity: 28
    },
    {
        purchaseId: 7,
        productId: 3,
        quantity: 45
    }
]

function getTotalSales(products, purchases) {
    return purchases.reduce((acc, curr) => {
        let product = products.find(prod => prod.productId === curr.productId);
        
            let revenue = product.price * curr.quantity;
            
            if (acc[product.name]) {
                acc[product.name] += revenue;
            } else {
                acc[product.name] = revenue;
            }
        
        return acc;
    }, {});
}

let totalSales = getTotalSales(products, purchases);
console.log(totalSales);