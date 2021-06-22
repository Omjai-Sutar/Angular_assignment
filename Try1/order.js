
varorder_items = require('./OrderItem');
 
function display(oid, order_items) {​​​​​​​​
varorder_items=order_items.OrderItem('I1001',order_items)
//var order_items2=order_items.OrderItem('I1002',order_items)
this.oid = oid;
this.order_items = order_items;
//  this.order_items2=order_items2
return ("OID: "+oid + " \nORDER_ITEM: " + order_items)
}​​​​​​​​
module.exports = {​​​​​​​​ display:display }​​​​​​​​