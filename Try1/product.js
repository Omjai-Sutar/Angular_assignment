
function product(pid, pname,unit_price,quantity,discount) {​​​​​​​​
//{​​​​​​​​pid:"p1001",pname:"pepsi",unit_price:30.00}​​​​​​​​,quantity:6,discount:0.05}​​​​​​​​

this.pid=pid
this.pname=pname
this.unit_price=unit_price
this.quantity=quantity
this.discount=discount
return ("\n  PID: "+pid+"\n  PNAME: "+pname+" \n  UNIT_PRICE: "+unit_price+" \n  QUANTITY: "+quantity+" \n  DISCOUNT:"+discount)
}​​​​​​​​
module.exports = {​​​​​​​​ product:product }​​​​​​​​