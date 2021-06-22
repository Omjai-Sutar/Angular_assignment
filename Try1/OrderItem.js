varproduct1 = require('./product');
 
function OrderItem(item_id, product) {​​​​​​​​

varproduct= product1.product("p1001","pespi","30.00","6","0.05")

this.item_id = item_id;
this.product = product;
return ("\n ITEM_ID: "+item_id + " \n PRODUCT: " + product)
}​​​​​​​​
module.exports = {​​​​​​​​ OrderItem:OrderItem }​​​​​​​​
