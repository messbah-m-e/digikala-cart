let checkoutItems ={
  name:"",
  discount: "",
  cost:"",
} 
checkoutItems.name=document.querySelectorAll(".checkout_item_title");
checkoutItems.cost=document.querySelectorAll(".checout_final_price");
alert(checkoutItems.length())
for(let i =0; i<checkoutItems.length(); i++){
  alert("hi 2")
  console.log(checkoutItems.name)
  console.log("")
  console.log(checkoutItems.cost)

}






