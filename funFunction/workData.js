var orders2 = [
    ["Mark Johansson", "waffle iron", 80, 2],
    ["Mark Johansson", "blender", 200, 1],
    ["Mark Johansson", "blender", 200, 1],
    ["Mark Johansson", "knife", 10, 4],
    ["Nikita Smith", "waffle iron", 80, 1],
    ["Nikita Smith", "knife", 10, 2],
    ["Nikita Smith", "pot", 20, 3]
];

var output = orders2
    .reduce((customers, product) => {
    customers[product[0]] = customers[product[0]] || []
    customers[product[0]].push({
        name: product[1],
        price: product[2],
        quantity: product[3]
    })
    return customers
}, {})


console.log(JSON.stringify(output, null, 2));
