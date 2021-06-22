let total_unit_price = 0;
    let quantity = 0;
    let discount = 0;

    let totalItemCost = 0;

    var data = {
        oid: "O1001",
        "order_items": [
            { item_id: "I1001", product: { pid: "p1001", pname: "pepsi", unit_price: 30.00 }, quantity: 6, discount: 0.05 },
            { item_id: "I1002", product: { pid: "p1002", pname: "maaza", unit_price: 30.00 }, quantity: 6, discount: 0.05 },
            { item_id: "I1002", product: { pid: "p1003", pname: "fruity", unit_price: 30.00 }, quantity: 6, discount: 0.05 }
        ],
        "total_order_cost": 0

    };

    data.order_items.forEach(element => {
        console.log(element);
        total_unit_price += element.product.unit_price;
        quantity += element.quantity;
        discount += element.discount
    });
    console.log("Total products: "+total_unit_price);

    totalItemCost = total_unit_price * quantity * discount;

    console.log("totalItemCost: "+totalItemCost)
   