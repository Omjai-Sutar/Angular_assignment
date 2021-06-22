
var order = require('./order');
var OrderItem = require('./OrderItem');
//var order_items=order_items.OrderItem('I1001','Pespi')
var display = order.display("o1001", OrderItem);
 

console.log(display);
