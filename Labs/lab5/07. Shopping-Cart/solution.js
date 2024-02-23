function solve() {
   let result = [];
   let totalPrice = 0;
   const addBtns = Array.from(document.querySelectorAll("button[class='add-product']"));
   const textArea = document.querySelector('textarea');
   const checkoutBtns = document.querySelector('.checkout');

   addBtns.forEach(btn => btn.addEventListener('click', addProduct));

   function addProduct(e) {
      let product = e.target.parentNode.parentNode;
      let name = product.querySelector('.product-title').textContent;
      let price = Number(product.querySelector('.product-line-price').textContent);
      result.push(name);
      totalPrice += price;
      textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   }

   checkoutBtns.addEventListener('click', checkoutHandler);
   
   function checkoutHandler(){
      let uniqueProducts = new Set(result);
      textArea.value += `You bought ${[...uniqueProducts].join(', ')} for ${totalPrice.toFixed(2)}.`;
      addBtns.forEach(btn => btn.removeEventListener('click', addProduct));
      checkoutBtns.removeEventListener('click', checkoutHandler);
   }
}