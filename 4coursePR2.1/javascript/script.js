const products = [
    {
        name: "Ноутбук Lenovo IdeaPad 3",
        category: "Ноутбуки",
        price: 15000,
        inStock: 30
    },
    {
        name: "Кросівки Nike Air Max 270",
        category: "Спортивне взуття",
        price: 21000,
        inStock: 0
    },
    {
        name: "Кавомашина De'Longhi Magnifica S",
        category: "Кавомашини",
        price: 12500,
        inStock: 5
    }
]

function getAvailableProducts(products) {
    products.forEach(item => {
        if (item.inStock > 0) {
            console.log(item);
        }
    });
}

getAvailableProducts(products);

function findByName(array, name){
let itemFoundByName = array.find(item => item.name == name);
if(itemFoundByName != null)
{
    console.log(`Назва: ${itemFoundByName.name}, Категорія: ${itemFoundByName.category}, Ціна: ${itemFoundByName.price}, В наявності: ${itemFoundByName.inStock}`);
}
else
{
    console.log(`Товар з іменем ${name} не знайдено`);
}

}

findByName(products,"Кросівки Nike Air Max 270");
