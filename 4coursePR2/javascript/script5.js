let orders = [
    {
        orderId: 1,
        customer: {
            name: "Володимир",
            email: "vol@gmail.com"
        },
        items: ["Ноутбук", "Мишка"],
        total: 1500
    },
    {
        orderId: 2,
        customer: {
            name: "Святослав",
            email: "sviat@gmail.com"
        },
        items: ["Телефон", "Зарядний кабель"],
        total: 800
    },
    {
        orderId: 3,
        customer: {
            name: "Інна",
            email: "inna@gmail.com"
        },
        items: ["Планшет", "Клавіатура"],
        total: 600
    }
];

function getTotalSpentByCustomer(orders, name) {
    let info = orders.filter(num => num.customer.name === name
    )
    
    let totalSpent = info.reduce((arr, curr) => arr + curr.total, 0)

    return totalSpent
}

let totalSpentBySviatoslav = getTotalSpentByCustomer(orders, "Святослав")

console.log(`Святослав витратив всього: ${totalSpentBySviatoslav}`)